import * as userService from '../services/user.service.js';
import logger from '../utils/logger.js';
import { successResponse, errorResponse } from '../utils/response.js';
import bcrypt from 'bcrypt';
export const getAllUsers = async (req, res, next) => {
   try {
      const users = await userService.getAllUsers();
      logger.info('Retrieved all users');
      successResponse(res, users, 'Users retrieved successfully');
   } catch (error) {
      logger.error(`Failed to retrieve users: ${error.message}`);
      errorResponse(res, 'Failed to retrieve users', 500, error);
   }
};

export const createUser = async (req, res, next) => {
   const { username, password, role } = req.body;
   console.log('Creating user with data:', { username, role }); // Debugging log
   try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await userService.createUser({ username, password: hashedPassword, role });
      logger.info(`User created: ${username}`);
      successResponse(res, newUser, 'User created successfully', 201);
   } catch (error) {
      logger.error(`Failed to create user: ${error.message}`);
      errorResponse(res, 'Failed to create user', 500, error);
   }
};

export const updateUser = async (req, res, next) => {
   const { id } = req.params;
   const { username, role, status } = req.body;
   try {
      const user = await userService.findUserById(id);
      if (!user) {
         logger.warn(`User not found: ${id}`);
         return errorResponse(res, 'User not found', 404);
      }

      const updatedUser = await userService.updateUser(id, {
         username: username || user.username,
         role: role || user.role,
         status: status || user.status
      });

      logger.info(`User updated: ${id}`);
      successResponse(res, updatedUser, 'User updated successfully');
   } catch (error) {
      logger.error(`Failed to update user: ${error.message}`);
      errorResponse(res, 'Failed to update user', 500, error);
   }
};

export const deleteUser = async (req, res, next) => {
   const { id } = req.params;
   try {
      const user = await userService.findUserById(id);
      if (!user) {
         logger.warn(`User not found: ${id}`);
         return errorResponse(res, 'User not found', 404);
      }

      await userService.deleteUser(id);
      logger.info(`User deleted: ${id}`);
      successResponse(res, null, 'User deleted successfully');
   } catch (error) {
      logger.error(`Failed to delete user: ${error.message}`);
      errorResponse(res, 'Failed to delete user', 500, error);
   }
};