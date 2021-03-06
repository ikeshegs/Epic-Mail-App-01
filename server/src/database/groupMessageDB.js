import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'epic-mail',
  password: 'C00ljoe.',
  port: 5432
});

pool.on('connect', () => {
  console.log('connected to the database');
});

pool.on('error', err => {
  console.log(err);
});

const createGroupMessageTable = () => {
  const queryGroupMessage = `CREATE TABLE IF NOT EXISTS
      GroupMessage(
        id UUID PRIMARY KEY,
        createdOn TIMESTAMP,
        subject CHAR(128) NOT NULL,
        message VARCHAR NOT NULL,
        parentMessengeId INT,
        modifiedOn TIMESTAMP,
        groupID INT
      )`;
  pool
    .query(queryGroupMessage)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

export default createGroupMessageTable;

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
