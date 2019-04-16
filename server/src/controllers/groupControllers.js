import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL_DEV
});

const createGroupTable = () => {
  const queryUser = `CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      name CHAR(128) NOT NULL,
      role CHAR(128) NOT NULL,
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

export default createGroupTable;

// eslint-disable-next-line import/no-extraneous-dependencies
require('make-runnable');
