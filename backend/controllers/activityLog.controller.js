import * as activityLogService from '../services/activityLog.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const getActivityLogs = async (req, res) => {
   try {
      const logs = await activityLogService.getAllActivityLogs();
      successResponse(res, logs, 'Activity logs retrieved successfully');
   } catch (error) {
      errorResponse(res, 'Failed to retrieve activity logs', 500, error);
   }
};