import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import {
   getAdminAnalyticsData,
   getUpdaterAnalyticsData,
   getViewerAnalyticsData,
   getSED1AnalyticsData,
} from '../controllers/analytics.controller.js';

const router = express.Router();

router.get('/admin', authenticateToken, authorizeRoles('Admin'), getAdminAnalyticsData);
router.get('/updater', authenticateToken, authorizeRoles('Updater'), getUpdaterAnalyticsData);
router.get('/viewer', authenticateToken, authorizeRoles('Viewer'), getViewerAnalyticsData);
router.get('/sed1', authenticateToken, authorizeRoles('SED1'), getSED1AnalyticsData);

export default router;