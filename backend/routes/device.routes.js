import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { getDevicesForUser, removeDevice } from '../controllers/device.controller.js';

const router = express.Router();

router.get('/', authenticateToken, getDevicesForUser);
router.delete('/:deviceId', authenticateToken, removeDevice);

export default router;