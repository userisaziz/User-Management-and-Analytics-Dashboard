import { successResponse, errorResponse } from '../utils/response.js';
import * as analyticsService from '../services/analytics.service.js';

export const getAdminAnalyticsData = async (req, res) => {
   try {
      const data = await analyticsService.fetchAdminAnalyticsData();
      return successResponse(res, data, 'Admin analytics data retrieved successfully');
   } catch (error) {
      return errorResponse(res, 'Failed to retrieve admin analytics data', 500, error);
   }
};

export const getUpdaterAnalyticsData = async (req, res) => {
   try {
      const data = await analyticsService.fetchUpdaterAnalyticsData(req.user.id);
      return successResponse(res, data, 'Updater analytics data retrieved successfully');
   } catch (error) {
      return errorResponse(res, 'Failed to retrieve updater analytics data', 500, error);
   }
};

export const getViewerAnalyticsData = async (req, res) => {
   try {
      const data = await analyticsService.fetchViewerAnalyticsData(req.user.id);
      return successResponse(res, data, 'Viewer analytics data retrieved successfully');
   } catch (error) {
      return errorResponse(res, 'Failed to retrieve viewer analytics data', 500, error);
   }
};

export const getSED1AnalyticsData = async (req, res) => {
   try {
      const data = await analyticsService.fetchSED1AnalyticsData(req.user.id);
      return successResponse(res, data, 'SED1 analytics data retrieved successfully');
   } catch (error) {
      return errorResponse(res, 'Failed to retrieve SED1 analytics data', 500, error);
   }
};