"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var salt = _bcryptjs.default.genSaltSync(10);

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "createUser",
    value: function createUser(req, res) {
      var findEmail = _user.default.find(function (item) {
        return item.email === req.body.email;
      });

      if (findEmail) {
        return res.status(409).json({
          status: 409,
          error: 'Email Exists'
        });
      } else {
        var hash = _bcryptjs.default.hashSync(req.body.password, salt); //User Model


        var user = {
          id: _user.default.length + 1,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hash,
          phone: req.body.phone
        };

        _user.default.push(user);

        var token = _jsonwebtoken.default.sign({
          email: user.email,
          password: user.password
        }, 'secretkey', {
          expiresIn: '1h'
        });

        return res.status(201).send({
          status: 201,
          data: [token]
        });
      }
    }
  }, {
    key: "signinUser",
    value: function signinUser(req, res) {
      var user = _user.default.find(function (item) {
        return item.email === req.body.email;
      });

      if (user) {
        _bcryptjs.default.compareSync(req.body.password, user.password);

        var token = _jsonwebtoken.default.sign({
          email: user.email
        }, 'secretkey', {
          expiresIn: '1h'
        });

        return res.status(200).json({
          status: 200,
          data: [token]
        });
      } else {
        return res.status(401).json({
          status: 401,
          error: 'User doesn\'t exist'
        });
      }
    }
  }]);

  return UserController;
}();

var userController = new UserController();
var _default = userController;
exports.default = _default;