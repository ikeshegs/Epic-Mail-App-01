"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

var _pg = require("pg");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = new _pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'epic-mail',
  password: 'C00ljoe.',
  port: 5432
});

var salt = _bcryptjs.default.genSaltSync(10);

var createUser = function createUser(req, res) {
  var result = {
    id: (0, _v.default)(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    createdOn: (0, _moment.default)(new Date()),
    modifiedOn: (0, _moment.default)(new Date())
  };
  var query = {
    text: 'INSERT INTO users (id, firstname, lastname, email, password, phone, createdOn, modifiedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
    values: [result.id, result.firstname, result.lastname, result.email, result.password, result.phone, (0, _moment.default)(new Date()), (0, _moment.default)(new Date())]
  };
  pool.query(query, function (error, data) {
    if (error) {
      console.log(error);
      throw error;
    }

    res.status(201).send({
      status: 201,
      data: [data.rows[0].id]
    });
  });
}; //   const findEmail = userDB.find(item => item.email === req.body.email);
//   if (findEmail) {
//     return res.status(409).json({
//       status: 409,
//       error: 'Email Exists'
//     });
//   }
//   const hash = bcrypt.hashSync(req.body.password, salt);
//   // User Model
//   const user = {
//     id: userDB.length + 1,
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     email: req.body.email,
//     password: hash,
//     phone: req.body.phone
//   };
//   userDB.push(user);
//   const token = jwt.sign(
//     {
//       email: user.email,
//       password: user.password
//     },
//     'secretkey',
//     { expiresIn: '1h' }
//   );
//   return res.status(201).send({
//     status: 201,
//     data: [token]
//   });
// }
// eslint-disable-next-line class-methods-use-this
// signinUser(req, res) {
//   const user = userDB.find(item => item.email === req.body.email);
//   if (user) {
//     bcrypt.compareSync(req.body.password, user.password);
//     const token = jwt.sign(
//       {
//         email: user.email
//       },
//       'secretkey',
//       {
//         expiresIn: '1h'
//       }
//     );
//     return res.status(200).json({
//       status: 200,
//       data: [token]
//     });
//   }
//   return res.status(401).json({
//     status: 401,
//     error: "User doesn't exist"
//   });
// }
// const userController = new UserController();
//export default userController;


var _default = createUser;
exports.default = _default;