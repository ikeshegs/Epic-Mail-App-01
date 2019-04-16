import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'epic-mail',
//   password: 'C00ljoe.',
//   port: 5432
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_DEV
});

pool.on('connect', () => {
  console.log('connected to the database');
});

pool.on('error', err => {
  console.log(err);
});

const createMessageTable = () => {
  const queryMessage = `CREATE TABLE IF NOT EXISTS
      message(
        id UUID PRIMARY KEY,
        createdOn TIMESTAMP,
        subject CHAR(128) NOT NULL,
        message VARCHAR NOT NULL,
        senderId UUID REFERENCES users(id),
        receiverId UUID REFERENCES users(id),
        parentMessageId UUID,
        modifiedOn TIMESTAMP,
        groupID UUID,
        status CHAR(10)
      )`;
  pool
    .query(queryMessage)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

export default createMessageTable;

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
