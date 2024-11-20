import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { getAllRoles, createRole, updateRole, deleteRole } from '../controllers/role.controller.js';
import { validateRoleCreation, validateRoleUpdate, validateRoleId } from '../validators/role.validators.js';
import { validationResult } from 'express-validator';

const router = express.Router();

const handleValidationErrors = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   next();
};

router.get('/', authenticateToken, authorizeRoles('Admin'), getAllRoles);
router.post('/', authenticateToken, authorizeRoles('Admin'), validateRoleCreation, handleValidationErrors, createRole);
router.put('/:id', authenticateToken, authorizeRoles('Admin'), validateRoleId, validateRoleUpdate, handleValidationErrors, updateRole);
router.delete('/:id', authenticateToken, authorizeRoles('Admin'), validateRoleId, handleValidationErrors, deleteRole);

export default router;