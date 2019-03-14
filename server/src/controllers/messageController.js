import messageModel from '../models/message';

class MessageController {
  createMsg(req, res) {
    // Create Message
    const messageContent = {
      id: messageModel.length + 1,
      createdOn: new Date(),
      subject: req.body.subject,
      message: req.body.message,
      email: req.body.email,
      parentMessengerId: req.body.parentMessengerId,
      status: req.body.status
    };
  
    messageModel.push(messageContent);
    return res.status(201).send({
      success: true,
      message: 'Message created',
      messageContent
    });
  }

  receiveMsg(req, res) {
    const filterReceivedMsgs = messageModel.filter(item => item.status ==='inbox');
    return res.status(200).send({
      success: true,
      message: 'All received messages retrieved successully',
      filterReceivedMsgs
    });
  }

  sentMsg(req, res) {
    const filterSentMsgs = messageModel.filter(item => item.status === 'sent');
    return res.status(200).send({
      success: true,
      message: 'All sent messages retrieved',
      filterSentMsgs
    })
  }

  unreadMsg(req, res) {
    const filterUnreadMsgs = messageModel.filter(item => item.status === 'unread');
    return res.status(200).send({
      success: true,
      message: 'All unread messages retrieved',
      filterUnreadMsgs
    })
  }

  specificEmail(req, res) {
    const emailId = req.body.id;

    const filterSpecificEmail = messageModel.filter(u => u.id === emailId);
    return res.status(200).send({
      success: true,
      message: 'email\'s found',
      filterSpecificEmail
    })
  }

  deleteFromInbox(req, res) {
    let emailId = req.params.id;

    const filterInboxEmail = messageModel.filter(item => item.status === 'inbox');
    
    const deleteEmail = filterInboxEmail.find(messages => messages.id === emailId);
    return res.status(200).send({
      success: true,
      message: 'Email deleted successfully',
      deleteEmail
    })
  }
  

}

const messageController = new MessageController();

export default messageController;