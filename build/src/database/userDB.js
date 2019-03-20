"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = _interopRequireDefault(require("pg"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pool = _pg.default.Pool;

_dotenv.default.config();

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'epic-mail',
  password: 'C00ljoe.',
  port: 5432
});
pool.on('connect', function () {
  console.log('connected to the database');
});
pool.on('error', function (err) {
  console.log(err);
});

var createUserTable = function createUserTable() {
  var queryUser = "CREATE TABLE IF NOT EXISTS\n      users(\n        id UUID PRIMARY KEY,\n        email VARCHAR(128) NOT NULL UNIQUE,\n        firstname CHAR(128) NOT NULL,\n        lastname CHAR(128) NOT NULL,\n        password CHAR(128) NOT NULL,\n        phone NUMERIC NOT NULL CHECK (phone >= 11),\n        createdOn TIMESTAMP,\n        modifiedOn TIMESTAMP\n      )";
  pool.query(queryUser).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

var _default = createUserTable; // eslint-disable-next-line import/no-extraneous-dependencies

exports.default = _default;

require('make-runnable');