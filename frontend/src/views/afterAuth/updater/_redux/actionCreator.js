import { createAsyncThunk } from '@reduxjs/toolkit';
import { Get, Post } from '../../../../services';


export const uploadDocument = createAsyncThunk('updater/uploadDocument', async (document, { rejectWithValue }) => {
   try {
      const response = await Post('/api/documents', document);
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});

export const fetchUpdateMetrics = createAsyncThunk('updater/fetchUpdateMetrics', async (_, { rejectWithValue }) => {
   try {
      const response = await Get('/api/documents/metrics');
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});

export const fetchPersonalActivityLogs = createAsyncThunk('updater/fetchPersonalActivityLogs', async (_, { rejectWithValue }) => {
   try {
      const response = await Get('/api/documents/activity-logs');
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});


export const fetchDocuments = createAsyncThunk('admin/fetchDocuments', async (_, { rejectWithValue }) => {
   try {
      const response = await Get('/api/documents/updater');
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});

export const updateDocumentStatus = createAsyncThunk('admin/updateDocumentStatus', async ({ id, status }, { rejectWithValue }) => {
   try {
      const response = await Put(`/api/documents/${id}/status`, { status });
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});


export const fetchUpadterActivityLogs = createAsyncThunk('admin/fetchUpadterActivityLogs', async ({ id, status }, { rejectWithValue }) => {
   try {
      const response = await Put(`/api/documents/${id}/status`, { status });
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});

