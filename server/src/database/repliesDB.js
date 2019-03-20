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

const repliesMessageTable = () => {
  const queryRepliesMessage = `CREATE TABLE IF NOT EXISTS
      repliesMessage(
        id UUID PRIMARY KEY,
        parentMessageId INT NOT NULL,
        message VARCHAR NOT NULL
      )`;
  pool
    .query(queryRepliesMessage)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

export default repliesMessageTable;

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
