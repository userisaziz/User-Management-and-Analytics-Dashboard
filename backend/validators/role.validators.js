import { body, param } from 'express-validator';

export const validateRoleCreation = [
   body('name')
      .isString()
      .withMessage('Role name must be a string')
      .isIn(['Admin', 'Updater', 'Viewer', 'SED1'])
      .withMessage('Invalid role name'),
   body('permissions')
      .isObject()
      .withMessage('Permissions must be a valid JSON object'),
];

export const validateRoleUpdate = [
   param('id')
      .isInt()
      .withMessage('Role ID must be an integer'),
   body('permissions')
      .isObject()
      .withMessage('Permissions must be a valid JSON object'),
];

export const validateRoleId = [
   param('id')
      .isInt()
      .withMessage('Role ID must be an integer'),
];