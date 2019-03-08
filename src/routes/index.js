import express from 'express';
import userController from '../controllers/userController';

// set router
const router = express.Router();

// User router
router.post('/api/v1/createuser', userController.createUser);
router.get('/api/v1/allusers', userController.getUsers);

export default router;