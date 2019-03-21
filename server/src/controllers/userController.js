import bcrypt from 'bcryptjs';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { Pool } from 'pg';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'epic-mail',
  password: 'C00ljoe.',
  port: 5432
});

const salt = bcrypt.genSaltSync(10);

// User Signup Function
const createUser = (req, res) => {signup
  const hash = bcrypt.hashSync(req.body.password, salt);
  const result = {
    id: uuidv4(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hash,
    phone: req.body.phone,
    createdOn: moment(new Date()),
    modifiedOn: moment(new Date())
  };
  const query = {
    text:
      'INSERT INTO users (id, firstname, lastname, email, password, phone, createdOn, modifiedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *',
    values: [
      result.id,
      result.firstname,
      result.lastname,
      result.email,
      result.password,
      result.phone,
      moment(new Date()),
      moment(new Date())
    ]
  };
  const token = jwt.sign(
    {
      id: result.id,
      email: result.email
    },
    process.env.JWT_KEY,
    { expiresIn: '1h' }
  );
  pool.query(query, (error, data) => {
    if (data) {
      return res.status(201).send({
        status: 201,
        data: [token]
      });
    }
    if (error.routine === '_bt_check_unique') {
      return res.status(400).send({
        status: 400,
        message: 'Email already exists'
      });
    }
    return res.status(400).send({
      status: 400,
      message: 'Bad request',
      data: [error]
    });
  });
};

// User Login Function
const login = (req, res) => {
  const result = {
    email: req.body.email,
    password: req.body.password
  };
  const queryUser = {
    text: 'SELECT * FROM users WHERE email=$1;',
    values: [result.email]
  };
  // pool.query(queryUser).then(() => {
  //   const isPass = bcrypt.compareSync(result.password, data.rows[0].password)
  // });
  pool.query(queryUser, (error, data) => {
    if (data) {
      // console.log(data.rows[0])
      const isPass = bcrypt.compareSync(result.password, data.rows[0].password);
      if (isPass) {
        return res.status(200).send({
          status: 200,
          data: [data.rows[0].id]
        });
      }
      // const token = jwt.sign(
      //   {
      //     email: data.email
      //   },
      //   process.env.JWT_KEY,
      //   {
      //     expiresIn: '1h'
      //   }
      // );
      if (error) {
        return res.status(400).send({
          status: 400,
          message: 'User not in Database'
        });
      }
      return res.status(401).send({
        message: 'Invalid login details'
      });
    }
    return res.status(401).send({
      status: 401,
      error: 'Invalid Login Details'
    });
  });
};

//   return res.status(200).send({
//     status: 200,
//     data: [user.rows[0].id]
//   });

// if (!.rows[0].password === req.body.password) {
//   return res.status(400).send({
//     status: 400,
//     message: 'Invalid user input'
//   });
// }
//   return res.status(400).send({
//     status: 400,
//     message: 'User Authentication failed',
//     data: [error]
//   });
// });
// if (user) {
//   bcrypt.compareSync(req.body.password, user.password);
//   const token = jwt.sign(
//     {
//       email: user.email
//     },
//     'secretkey',
//     {
//       expiresIn: '1h'
//     }
//   );
//   return res.status(200).json({
//     status: 200,
//     data: [token]
//   });
// }
// return res.status(401).json({
//   status: 401,
//   error: "User doesn't exist"
// });
// };

export { createUser, login };
