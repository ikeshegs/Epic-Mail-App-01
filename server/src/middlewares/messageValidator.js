const messageValidator = {
  createMessage(req, res, next) {
    if (!req.body.subject || req.body.subject.trim().length < 1) {
      return res.status(400).send({
        error: 'Subject is required'
      });
    }
    if (!req.body.message || req.body.message.trim().length < 1) {
      return res.status(400).send({
        error: 'Message is required'
      });
    }
    return next();
  }
}

export default messageValidator;