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

var repliesMessageTable = function repliesMessageTable() {
  var queryRepliesMessage = "CREATE TABLE IF NOT EXISTS\n      repliesMessage(\n        id UUID PRIMARY KEY,\n        parentMessageId INT NOT NULL,\n        message VARCHAR NOT NULL\n      )";
  pool.query(queryRepliesMessage).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

var _default = repliesMessageTable; // eslint-disable-next-line import/no-extraneous-dependencies

exports.default = _default;

require('make-runnable');