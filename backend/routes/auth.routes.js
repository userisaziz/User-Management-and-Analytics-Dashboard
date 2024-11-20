import express from 'express';
import { loginUser, registerUser, getUserSessionsAndLogs } from '../controllers/auth.controller.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { validateUser } from '../validators/user.validators.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', authenticateToken, authorizeRoles('Admin'), validateUser, registerUser);
router.get('/sessions-logs', authenticateToken, getUserSessionsAndLogs);

export default router;