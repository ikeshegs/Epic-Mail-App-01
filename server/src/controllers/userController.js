import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../models/user';

const salt = bcrypt.genSaltSync(10);
class UserController {
  createUser(req, res) {

    const findEmail = userModel.find(item => item.email === req.body.email);
    if (findEmail) {
      return res.status(409).json({
        status: 409,
        error: 'Email Exists'
      })
    } else {
      const hash = bcrypt.hashSync(req.body.password, salt);
      //User Model
      const user = {
        id: userModel.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
        phone: req.body.phone
      };
      userModel.push(user);
      return res.status(201).send({
        status: 201,
        data: {user}
      });
    }

  }

  signinUser(req, res) {
    const findEmail = userModel.find(item => item.email === req.body.email);

    if (findEmail) {
      bcrypt.compareSync(req.body.password, userModel.password);
      return res.status(200).json({
        status: 200,
        data
      })
    } else {
      return res.status(401).json({
        status: 401,
        error: 'User doesn\'t exist'
      })
    }
    
    


    const user = {
      email: req.body.email,
      password: req.body.password
    }                                                                                                                                                                                                                                                         
  }

}
const userController = new UserController();

export default userController;