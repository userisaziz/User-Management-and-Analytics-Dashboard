import express from 'express';
import {
   getAllDocuments,
   uploadDocument,
   modifyDocument,
   deleteDocument,
   getUpdateMetrics,
   getPersonalActivityLogs,
   updateDocumentStatus,
   getUpdaterdocuments
} from '../controllers/document.controller.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

// Route to get all documents (Admin and Viewer can view)
router.get('/', authenticateToken, authorizeRoles('Admin', 'Viewer'), getAllDocuments);

// Route to upload a new document (Updater can upload)
router.post('/', authenticateToken, authorizeRoles('Updater'), uploadDocument);

// Route to modify an existing document (Updater can modify their own documents)
router.put('/:id', authenticateToken, authorizeRoles('Updater'), modifyDocument);

// Route to delete a document (Admin can delete)
router.delete('/:id', authenticateToken, authorizeRoles('Admin'), deleteDocument);

// Route to get update metrics (Updater can view their metrics)
router.get('/metrics', authenticateToken, authorizeRoles('Updater'), getUpdateMetrics);

// Route to get personal activity logs (Updater can view their logs)
router.get('/activity-logs', authenticateToken, authorizeRoles('Updater'), getPersonalActivityLogs);
router.post('/status', authenticateToken, authorizeRoles('Admin'), updateDocumentStatus);
router.get('/updater', authenticateToken, authorizeRoles('Updater'), getUpdaterdocuments);

export default router;