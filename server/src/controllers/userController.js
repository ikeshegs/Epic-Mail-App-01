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
      const token = jwt.sign({
        email: user.email,
        password: user.password
      }, 'secretkey', {expiresIn: '1h'})
      return res.status(201).send({
        status: 201,
        data: [token]
      });
    }
  }

  signinUser(req, res) {
    const user = userModel.find(item => item.email === req.body.email);
    if (user) {
      bcrypt.compareSync(req.body.password, user.password);
        const token = jwt.sign({
          email: user.email
        }, 
        'secretkey',
        {
          expiresIn: '1h'
        }
        )
      return res.status(200).json({
        status: 200,
        data: [token]
      })
    } else {  
      return res.status(401).json({
        status: 401,
        error: 'User doesn\'t exist'
      })
    }                                                                                                                                                                                                                                           
  }
}
const userController = new UserController();

export default userController;