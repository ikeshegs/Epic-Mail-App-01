"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "createUser",
    value: function createUser(req, res) {
      // Check if the form is filled correctly
      if (!req.body.firstname) {
        return res.status(400).send({
          success: false,
          message: 'Firstname is required'
        });
      } else if (!req.body.lastname) {
        return res.status(400).send({
          success: false,
          message: 'Lastname is required'
        });
      } else if (!req.body.email) {
        return res.status(400).send({
          success: false,
          message: 'Email address is required'
        });
      } else if (!req.body.password) {
        return res.status(400).send({
          success: false,
          message: 'Password is required'
        });
      } else if (!req.body.phone) {
        return res.status(400).send({
          success: false,
          message: 'Phone Number is required'
        });
      } // Add New User


      var user = {
        id: _user.default.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
      };

      _user.default.push(user);

      return res.status(201).send({
        success: true,
        message: 'User created',
        user: user
      });
    }
  }, {
    key: "getUsers",
    value: function getUsers(req, res) {
      return res.status(200).send({
        success: true,
        message: 'All users retrieved successfully',
        userModel: _user.default
      });
    }
  }, {
    key: "signinUser",
    value: function signinUser(req, res) {
      if (!req.body.email) {
        return res.status(400).send({
          success: false,
          message: 'Email is required'
        });
      } else if (!req.body.password) {
        return res.status(400).send({
          success: false,
          message: 'Password is required'
        });
      } // Sign in user


      var user = {
        email: req.body.email,
        password: req.body.password
      };
    }
  }]);

  return UserController;
}();

var userController = new UserController();
var _default = userController;
exports.default = _default;