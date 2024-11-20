import * as roleService from '../services/role.service.js';
import logger from '../utils/logger.js';

export const getAllRoles = async (req, res, next) => {
   try {
      const roles = await roleService.getAllRoles();
      logger.info('Retrieved all roles');
      res.json(roles);
   } catch (error) {
      logger.error(`Failed to retrieve roles: ${error.message}`);
      next({ status: 500, message: 'Failed to retrieve roles', originalError: error });
   }
};

export const createRole = async (req, res, next) => {
   const { name, permissions } = req.body;
   try {
      const newRole = await roleService.createRole({ name, permissions });
      logger.info(`Role created: ${name}`);
      res.status(201).json(newRole);
   } catch (error) {
      logger.error(`Failed to create role: ${error.message}`);
      next({ status: 500, message: 'Failed to create role', originalError: error });
   }
};

export const updateRole = async (req, res, next) => {
   const { id } = req.params;
   const { permissions } = req.body;
   try {
      const updatedRole = await roleService.updateRole(id, { permissions });
      logger.info(`Role updated: ${id}`);
      res.json(updatedRole);
   } catch (error) {
      logger.error(`Failed to update role: ${error.message}`);
      next({ status: 500, message: 'Failed to update role', originalError: error });
   }
};

export const deleteRole = async (req, res, next) => {
   const { id } = req.params;
   try {
      await roleService.deleteRole(id);
      logger.info(`Role deleted: ${id}`);
      res.json({ message: 'Role deleted' });
   } catch (error) {
      logger.error(`Failed to delete role: ${error.message}`);
      next({ status: 500, message: 'Failed to delete role', originalError: error });
   }
};