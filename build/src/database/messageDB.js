"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = _interopRequireDefault(require("pg"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pool = _pg.default.Pool;

_dotenv.default.config(); // const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'epic-mail',
//   password: 'C00ljoe.',
//   port: 5432
// });


var pool = new Pool({
  connectionString: process.env.DATABASE_URL_PROD
});
pool.on('connect', function () {
  console.log('connected to the database');
});
pool.on('error', function (err) {
  console.log(err);
});

var createMessageTable = function createMessageTable() {
  var queryMessage = "CREATE TABLE IF NOT EXISTS\n      message(\n        id UUID PRIMARY KEY,\n        createdOn TIMESTAMP,\n        subject CHAR(128) NOT NULL,\n        message VARCHAR NOT NULL,\n        senderId UUID REFERENCES users(id),\n        receiverId UUID REFERENCES users(id),\n        parentMessageId UUID,\n        modifiedOn TIMESTAMP,\n        groupID UUID,\n        status CHAR(10)\n      )";
  pool.query(queryMessage).then(function (res) {
    console.log(res);
    pool.end();
  }).catch(function (err) {
    console.log(err);
    pool.end();
  });
};

var _default = createMessageTable; // eslint-disable-next-line import/no-extraneous-dependencies

exports.default = _default;

require('make-runnable');