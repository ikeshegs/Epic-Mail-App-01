import messageModel from '../models/message';

class MessageController {
  createMsg(req, res) {
    if (!req.body.subject) {
      return res.status(400).send({
        success: false,
        message: 'Subject is required'
      });
    } else if (!req.body.message) {
        return res.status(400).send({
          success: false,
          message: 'Message is required'
        });
    } else if (!req.body.email) {
        return res.status(400).send({
          success: false,
          message: 'Email address is required'
        });
    } 
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
    const filterReceivedMsgs = messageModel.filter(item =>item.status ==='inbox');
    return res.status(200).send({
      success: true,
      message: 'All received messages retrieved successully',
      filterReceivedMsgs
    });
  }
  

}

const messageController = new MessageController();

export default messageController;