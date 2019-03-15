const validator = {
  signupValidator (req, res, next) {
    if (!req.body.firstname || req.body.firstname.trim().length < 1) {
      return res.status(400).send({
        error: 'Firstname is required'
      });
    } 
    if (!req.body.lastname || req.body.lastname.trim().length < 1) {
      return res.status(400).send({
        error: 'Lastname is required'
      });
    } 
    if (!req.body.email || req.body.email.trim().length < 1) {
      return res.status(400).send({
        error: 'Email address is required'
      });
     } 
    if (!req.body.password || req.body.password.trim().length < 1) {
      return res.status(400).send({
        error: 'Password is required'
        });
    } 
    if (!req.body.phone || req.body.phone.trim().length < 1) {
      return res.status(400).send({
        error: 'Phone Number is required'
      });
    }
    return next();
  },
  
  loginValidator (req, res, next) {
    if (!req.body.email || req.body.email.trim().length < 1) {
      return res.status(400).send({
        success: false,
        message: 'Email is required'
      });
    } 
    if (!req.body.password || req.body.password.trim().length < 1) {
      return res.status(400).send({
        success: false,
        message: 'Password is required'
      });
    }
    return next();
  }
}

export default validator;
