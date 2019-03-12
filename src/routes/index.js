import express from 'express';
import userController from '../controllers/userController';
import messageController from '../controllers/messageController';

// set router
const router = express.Router();

// User router
router.post('/api/v1/createuser', userController.createUser);
router.get('/api/v1/allusers', userController.getUsers);
router.post('/api/v1/signinuser', userController.signinUser);

// Messages
router.post('/api/v1/createmsg', messageController.createMsg);
router.get('/api/v1/receivedmsg', messageController.receiveMsg);
router.get('/api/v1/sentmsg', messageController.sentMsg);

export default router;