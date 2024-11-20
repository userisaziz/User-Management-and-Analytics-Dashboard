import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { validateUser } from '../validators/user.validators.js';

const router = express.Router();

// Routes with appropriate middleware
router.get('/', authenticateToken, authorizeRoles('Admin', 'Viewer'), getAllUsers);
router.post('/', authenticateToken, authorizeRoles('Admin'), validateUser, createUser);
router.put('/:id', authenticateToken, authorizeRoles('Admin', 'Updater'), validateUser, updateUser);
router.delete('/:id', authenticateToken, authorizeRoles('Admin'), deleteUser);

export default router;