/* eslint-disable class-methods-use-this */
import { Pool } from 'pg';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'epic-mail',
  password: 'C00ljoe.',
  port: 5432
});

class MessageController {
  // eslint-disable-next-line class-methods-use-this
  createMsg(req, res) {
    // Create Message
    const id = uuidv4();
    const newMessage = {
      id,
      subject: req.body.subject,
      message: req.body.message,
      createdOn: moment(new Date()),
      status: req.body.status,
      parentMessageId: id
    };

    const query = {
      text:
        'INSERT INTO message (id, subject, message, createdOn, parentMessageId, status) VALUES ($1, $2, $3, $4, $5, $6) returning *',
      values: [
        newMessage.id,
        newMessage.subject,
        newMessage.message,
        moment(new Date()),
        newMessage.status,
        newMessage.parentMessageId
      ]
    };
    // console.log(query)
    pool.query(query, (error, data) => {
      console.log(data);
      // if (!data) {
      //   return res.status(400).send({
      //     status: 400,
      //     message: 'Bad request'
      //   });
      // }
      if (error) {
        return res.status(404).send({
          status: 404,
          error
        });
      }
      return res.status(201).send({
        status: 201,
        data: [
          {
            id: data.id
          }
        ]
      });
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
