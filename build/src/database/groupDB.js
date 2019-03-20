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

var createGroupTable = function createGroupTable() {
  var queryGroup = "CREATE TABLE IF NOT EXISTS\n      newGroup(\n        id UUID PRIMARY KEY,\n        name CHAR(30) NOT NULL,\n        role CHAR(15) NOT NULL\n      )";
  pool.query(queryGroup).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

var _default = createGroupTable; // eslint-disable-next-line import/no-extraneous-dependencies

exports.default = _default;

require('make-runnable');