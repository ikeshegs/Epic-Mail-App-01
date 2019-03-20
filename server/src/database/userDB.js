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

const createUserTable = () => {
  const queryUser = `CREATE TABLE IF NOT EXISTS
      users(
        id UUID PRIMARY KEY,
        email VARCHAR(128) NOT NULL UNIQUE,
        firstname CHAR(128) NOT NULL,
        lastname CHAR(128) NOT NULL,
        password CHAR(128) NOT NULL,
        phone NUMERIC NOT NULL CHECK (phone >= 11),
        createdOn TIMESTAMP,
        modifiedOn TIMESTAMP
      )`;
  pool
    .query(queryUser)
    .then(res => {
      console.log(res);
      pool.end();
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
};

export default createUserTable;

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
