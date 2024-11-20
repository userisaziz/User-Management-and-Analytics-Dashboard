import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as userService from '../services/user.service.js';
import logger from '../utils/logger.js';
import { successResponse, errorResponse } from '../utils/response.js';

import { createSessionAndLog } from '../services/session.service.js';

export const loginUser = async (req, res, next) => {
   const { username, password } = req.body;
   const ipAddress = req.ip || req.connection.remoteAddress;
   try {
      const user = await userService.findUserByUsername(username);
      if (!user) {
         logger.warn(`Invalid login attempt for username: ${username}, IP: ${ipAddress}`);
         return errorResponse(res, 'Invalid username or password', 401);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
         logger.warn(`Invalid password attempt for username: ${username}, IP: ${ipAddress}`);
         return errorResponse(res, 'Invalid username or password', 401);
      }

      const token = jwt.sign({ id: user.userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      const loginTime = new Date();
      logger.info(`User logged in: ${username}, IP: ${ipAddress}, Login Time: ${loginTime}`);

      // Create session and activity log
      await createSessionAndLog(user.userId, ipAddress);

      // Update last login time
      await userService.updateUser(user.userId, { lastLogin: loginTime });

      return successResponse(res, { token, role: user.role, loginTime }, 'Login successful');
   } catch (error) {
      logger.error(`Failed to login user: ${error.message}, IP: ${ipAddress}`);
      return errorResponse(res, 'Failed to login user', 500, error);
   }
};

export const registerUser = async (req, res, next) => {
   const { username, password, role } = req.body;
   try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await userService.createUser({ username, password: hashedPassword, role });
      logger.info(`User registered: ${username}`);
      return successResponse(res, newUser, 'User registered successfully', 201);
   } catch (error) {
      logger.error(`Failed to register user: ${error.message}`);
      return errorResponse(res, 'Failed to register user', 500, error);
   }
};

export const getUserSessionsAndLogs = async (req, res) => {
   try {
      const userId = req.user.id;
      const userData = await sessionService.getUserWithSessionsAndLogs(userId);
      return successResponse(res, userData, 'User data retrieved successfully');
   } catch (error) {
      return errorResponse(res, 'Failed to retrieve user data', 500, error);
   }
};