import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { getActivityLogs } from '../controllers/activityLog.controller.js';

const router = express.Router();

// Route to get all activity logs (Admin can view)
router.get('/', authenticateToken, getActivityLogs);

export default router;