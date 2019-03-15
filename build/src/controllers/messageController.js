"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _message = _interopRequireDefault(require("../models/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MessageController =
/*#__PURE__*/
function () {
  function MessageController() {
    _classCallCheck(this, MessageController);
  }

  _createClass(MessageController, [{
    key: "createMsg",
    value: function createMsg(req, res) {
      // Create Message
      var messageContent = {
        id: _message.default.length + 1,
        createdOn: new Date(),
        subject: req.body.subject,
        message: req.body.message,
        parentMessageId: req.body.parentMessageId,
        status: req.body.status
      };

      _message.default.push(messageContent);

      return res.status(201).send({
        status: 200,
        data: [messageContent]
      });
    }
  }, {
    key: "receiveMsg",
    value: function receiveMsg(req, res) {
      var filterReceivedMsgs = _message.default.filter(function (item) {
        return item.status === 'inbox';
      });

      return res.status(200).send({
        status: 200,
        data: [filterReceivedMsgs]
      });
    }
  }, {
    key: "sentMsg",
    value: function sentMsg(req, res) {
      var filterSentMsgs = _message.default.filter(function (item) {
        return item.status === 'sent';
      });

      return res.status(200).send({
        status: 200,
        data: [filterSentMsgs]
      });
    }
  }, {
    key: "unreadMsg",
    value: function unreadMsg(req, res) {
      var filterUnreadMsgs = _message.default.filter(function (item) {
        return item.status === 'unread';
      });

      return res.status(200).send({
        status: 200,
        data: [filterUnreadMsgs]
      });
    }
  }, {
    key: "specificEmail",
    value: function specificEmail(req, res) {
      var emailId = Number(req.params.id);

      var filterSpecificEmail = _message.default.filter(function (u) {
        return u.id === emailId;
      });

      console.log(filterSpecificEmail);
      return res.status(200).send({
        status: 200,
        data: [filterSpecificEmail]
      });
    }
  }, {
    key: "deleteFromInbox",
    value: function deleteFromInbox(req, res) {
      var emailId = Number(req.params.id);

      var filterInboxEmail = _message.default.filter(function (item) {
        return item.status === 'inbox';
      });

      var deleteEmail = filterInboxEmail.find(function (messages) {
        return messages.id === emailId;
      });
      return res.status(200).send({
        status: 200,
        message: 'Email deleted'
      });
    }
  }]);

  return MessageController;
}();

var messageController = new MessageController();
var _default = messageController;
exports.default = _default;