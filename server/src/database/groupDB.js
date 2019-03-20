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

const createGroupTable = () => {
  const queryGroup = `CREATE TABLE IF NOT EXISTS
      newGroup(
        id UUID PRIMARY KEY,
        name CHAR(30) NOT NULL,
        role CHAR(15) NOT NULL
      )`;
  pool
    .query(queryGroup)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

export default createGroupTable;

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
