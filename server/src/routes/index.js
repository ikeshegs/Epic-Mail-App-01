/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import createUser from '../controllers/userController';
import messageController from '../controllers/messageController';
import userValidator from '../middlewares/validator';
import messageValidator from '../middlewares/messageValidator';

// set router
const router = express.Router();

// User router
router.post('/api/v2/auth/signup', userValidator.signupValidator, createUser);
// router.post(
//   '/api/v2/auth/login',
//   userValidator.loginValidator,
//   userController.signinUser
// );
// Messages
router.post(
  '/api/v1/messages',
  messageValidator.createMessage,
  messageController.createMsg
);
router.get('/api/v1/messages', messageController.receiveMsg);
router.get('/api/v1/messages/sent', messageController.sentMsg);
router.get('/api/v1/messages/unread', messageController.unreadMsg);
router.get('/api/v1/messages/:id', messageController.specificEmail);
router.delete('/api/v1/messages/:id', messageController.deleteFromInbox);

export default router;
