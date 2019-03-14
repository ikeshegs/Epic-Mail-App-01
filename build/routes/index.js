"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _messageController = _interopRequireDefault(require("../controllers/messageController"));

var _validator = _interopRequireDefault(require("../middlewares/validator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set router
var router = _express.default.Router(); // User router


router.post('/api/v1/auth/signup', _validator.default.signupValidator, _userController.default.createUser);
router.post('/api/v1/auth/login', _validator.default.loginValidator, _userController.default.signinUser); // Messages

router.post('/api/v1/messages', _messageController.default.createMsg);
router.get('/api/v1/messages', _messageController.default.receiveMsg);
router.get('/api/v1/messages/sent', _messageController.default.sentMsg);
router.get('/api/v1/messages/unread', _messageController.default.unreadMsg);
router.get('/api/v1/messages/:id', _messageController.default.specificEmail);
router.delete('/api/v1/messages/:id', _messageController.default.deleteFromInbox);
var _default = router;
exports.default = _default;