"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.createUser = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _pg = require("pg");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var pool = new _pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'epic-mail',
  password: 'C00ljoe.',
  port: 5432
});

var salt = _bcryptjs.default.genSaltSync(10); // User Signup Function


var createUser = function createUser(req, res) {
  signup;

  var hash = _bcryptjs.default.hashSync(req.body.password, salt);

  var result = {
    id: (0, _v.default)(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hash,
    phone: req.body.phone,
    createdOn: (0, _moment.default)(new Date()),
    modifiedOn: (0, _moment.default)(new Date())
  };
  var query = {
    text: 'INSERT INTO users (id, firstname, lastname, email, password, phone, createdOn, modifiedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
    values: [result.id, result.firstname, result.lastname, result.email, result.password, result.phone, (0, _moment.default)(new Date()), (0, _moment.default)(new Date())]
  };

  var token = _jsonwebtoken.default.sign({
    id: result.id,
    email: result.email
  }, process.env.JWT_KEY, {
    expiresIn: '1h'
  });

  pool.query(query, function (error, data) {
    if (data) {
      return res.status(201).send({
        status: 201,
        data: [token]
      });
    }

    if (error.routine === '_bt_check_unique') {
      return res.status(400).send({
        status: 400,
        message: 'Email already exists'
      });
    }

    return res.status(400).send({
      status: 400,
      message: 'Bad request',
      data: [error]
    });
  });
}; // User Login Function


exports.createUser = createUser;

var login = function login(req, res) {
  var result = {
    email: req.body.email,
    password: req.body.password
  };
  var queryUser = {
    text: 'SELECT * FROM users WHERE email=$1;',
    values: [result.email]
  }; // pool.query(queryUser).then(() => {
  //   const isPass = bcrypt.compareSync(result.password, data.rows[0].password)
  // });

  pool.query(queryUser, function (error, data) {
    if (data) {
      // console.log(data.rows[0])
      var isPass = _bcryptjs.default.compareSync(result.password, data.rows[0].password);

      if (isPass) {
        return res.status(200).send({
          status: 200,
          data: [data.rows[0].id]
        });
      } // const token = jwt.sign(
      //   {
      //     email: data.email
      //   },
      //   process.env.JWT_KEY,
      //   {
      //     expiresIn: '1h'
      //   }
      // );


      if (error) {
        return res.status(400).send({
          status: 400,
          message: 'User not in Database'
        });
      }

      return res.status(401).send({
        message: 'Invalid login details'
      });
    }

    return res.status(401).send({
      status: 401,
      error: 'Invalid Login Details'
    });
  });
}; //   return res.status(200).send({
//     status: 200,
//     data: [user.rows[0].id]
//   });
// if (!.rows[0].password === req.body.password) {
//   return res.status(400).send({
//     status: 400,
//     message: 'Invalid user input'
//   });
// }
//   return res.status(400).send({
//     status: 400,
//     message: 'User Authentication failed',
//     data: [error]
//   });
// });
// if (user) {
//   bcrypt.compareSync(req.body.password, user.password);
//   const token = jwt.sign(
//     {
//       email: user.email
//     },
//     'secretkey',
//     {
//       expiresIn: '1h'
//     }
//   );
//   return res.status(200).json({
//     status: 200,
//     data: [token]
//   });
// }
// return res.status(401).json({
//   status: 401,
//   error: "User doesn't exist"
// });
// };


exports.login = login;