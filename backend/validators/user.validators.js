import { body, validationResult } from 'express-validator';

export const validateUser = [
   body('username').isString().notEmpty().withMessage('Username is required'),
   body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
   body('role').isIn(['Admin', 'Updater', 'Viewer', 'SED1']).withMessage('Invalid role'),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         console.error(chalk.red(`Failed to delete user: ${{ errors: errors.array() }}`));
         return res.status(400).json({ errors: errors.array() });

      }
      next();
   }
];