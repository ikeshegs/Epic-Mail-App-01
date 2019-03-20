/* eslint-disable class-methods-use-this */
import { Pool } from 'pg';

class MessageController {
  // eslint-disable-next-line class-methods-use-this
  createMsg(req, res) {
    // Create Message
    const messageContent = {
      id: messageModel.length + 1,
      createdOn: new Date(),
      subject: req.body.subject,
      message: req.body.message,
      parentMessageId: req.body.parentMessageId,
      status: req.body.status
    };

    messageModel.push(messageContent);
    return res.status(201).send({
      status: 200,
      data: [messageContent]
    });
  }

  // eslint-disable-next-line class-methods-use-this
  receiveMsg(req, res) {
    const filterReceivedMsgs = messageModel.filter(
      item => item.status === 'inbox'
    );
    return res.status(200).send({
      status: 200,
      data: [filterReceivedMsgs]
    });
  }

  // eslint-disable-next-line class-methods-use-this
  sentMsg(req, res) {
    const filterSentMsgs = messageModel.filter(item => item.status === 'sent');
    return res.status(200).send({
      status: 200,
      data: [filterSentMsgs]
    });
  }

  unreadMsg(req, res) {
    const filterUnreadMsgs = messageModel.filter(
      item => item.status === 'unread'
    );
    return res.status(200).send({
      status: 200,
      data: [filterUnreadMsgs]
    });
  }

  specificEmail(req, res) {
    let emailId = Number(req.params.id);
    const filterSpecificEmail = messageModel.filter(u => u.id === emailId);
    console.log(filterSpecificEmail);
    return res.status(200).send({
      status: 200,
      data: [filterSpecificEmail]
    });
  }

  deleteFromInbox(req, res) {
    let emailId = Number(req.params.id);
    const filterInboxEmail = messageModel.filter(
      item => item.status === 'inbox'
    );
    const deleteEmail = filterInboxEmail.find(
      messages => messages.id === emailId
    );
    return res.status(200).send({
      status: 200,
      message: 'Email deleted'
    });
  }
}

const messageController = new MessageController();

export default messageController;
