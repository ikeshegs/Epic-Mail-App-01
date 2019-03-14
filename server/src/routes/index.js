import express from 'express';
import userController from '../controllers/userController';
import messageController from '../controllers/messageController';
import validator from '../middlewares/validator';

// set router
const router = express.Router();

// User router
router.post('/api/v1/auth/signup', validator.signupValidator, userController.createUser);
router.post('/api/v1/auth/login', validator.loginValidator, userController.signinUser);

// Messages
router.post('/api/v1/messages', messageController.createMsg);
router.get('/api/v1/messages', messageController.receiveMsg);
router.get('/api/v1/messages/sent', messageController.sentMsg);
router.get('/api/v1/messages/unread', messageController.unreadMsg);
router.get('/api/v1/messages/:id', messageController.specificEmail);
router.delete('/api/v1/messages/:id', messageController.deleteFromInbox);

export default router;
