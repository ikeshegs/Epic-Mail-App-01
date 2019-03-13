"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _messageController = _interopRequireDefault(require("../controllers/messageController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set router
var router = _express.default.Router(); // User router


router.post('/api/v1/createuser', _userController.default.createUser);
router.get('/api/v1/allusers', _userController.default.getUsers);
router.post('/api/v1/signinuser', _userController.default.signinUser); // Messages

router.post('/api/v1/createmsg', _messageController.default.createMsg);
router.get('/api/v1/receivedmsg', _messageController.default.receiveMsg);
router.get('/api/v1/sentmsg', _messageController.default.sentMsg);
router.get('/api/v1/unreadmsg', _messageController.default.unreadMsg);
router.get('/api/v1/specificemail', _messageController.default.specificEmail);
router.delete('/api/v1/deleteemail', _messageController.default.deleteFromInbox);
var _default = router;
exports.default = _default;