import * as documentService from '../services/document.service.js';
import { successResponse, errorResponse } from '../utils/response.js';

export const getAllDocuments = async (req, res) => {
   try {
      const documents = await documentService.getAllDocuments();
      successResponse(res, documents, 'Documents retrieved successfully');
   } catch (error) {
      errorResponse(res, 'Failed to retrieve documents', 500, error);
   }
};
export const getUpdaterdocuments = async (req, res) => {
   try {
      const documents = await documentService.fetchUpdaterDocs(req.user.id);
      successResponse(res, documents, 'Documents retrieved successfully');
   } catch (error) {
      errorResponse(res, 'Failed to retrieve documents', 500, error);
   }
};

export const uploadDocument = async (req, res) => {
   try {
      const document = await documentService.uploadDocument(req.user.id, req.body);
      successResponse(res, document, 'Document uploaded successfully');
   } catch (error) {
      errorResponse(res, 'Failed to upload document', 500, error);
   }
};

export const modifyDocument = async (req, res) => {
   try {
      const document = await documentService.modifyDocument(req.user.id, req.params.id, req.body);
      successResponse(res, document, 'Document modified successfully');
   } catch (error) {
      errorResponse(res, 'Failed to modify document', 500, error);
   }
};

export const deleteDocument = async (req, res) => {
   try {
      await documentService.deleteDocument(req.params.id);
      successResponse(res, null, 'Document deleted successfully');
   } catch (error) {
      errorResponse(res, 'Failed to delete document', 500, error);
   }
};

export const getUpdateMetrics = async (req, res) => {
   try {
      const metrics = await documentService.getUpdateMetrics(req.user.id);
      successResponse(res, metrics, 'Update metrics retrieved successfully');
   } catch (error) {
      errorResponse(res, 'Failed to retrieve update metrics', 500, error);
   }
};

export const getPersonalActivityLogs = async (req, res) => {
   try {
      const logs = await documentService.getPersonalActivityLogs(req.user.id);
      successResponse(res, logs, 'Personal activity logs retrieved successfully');
   } catch (error) {
      errorResponse(res, 'Failed to retrieve personal activity logs', 500, error);
   }
};
// backend/controllers/document.controller.js
export const updateDocumentStatus = async (req, res) => {
   const { status, documentId } = req.body;
   try {
      const updatedDocument = await documentService.updateDocumentStatus(documentId, status);
      successResponse(res, updatedDocument, 'Document status updated successfully');
   } catch (error) {
      errorResponse(res, 'Failed to update document status', 500, error);
   }
};