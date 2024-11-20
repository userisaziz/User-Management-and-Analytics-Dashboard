import { createAsyncThunk } from "@reduxjs/toolkit";
import { Delete, Get, Put } from "../../../../services";

import { Post } from "../../../../services";

export const createUser = createAsyncThunk(
   'users/createUser',
   async ({ username, password, role, onSuccess, onError }, { rejectWithValue }) => {
      try {
         const response = await Post('/api/users', { username, password, role });
         console.log('response: ', response);
         if (onSuccess) onSuccess(response.data);
         return response.data;
      } catch (error) {
         console.log('Error creating user:', error);
         if (onError) onError(error);
         return rejectWithValue(error.response?.data || 'An error occurred');
      }
   }
);

export const updateUser = createAsyncThunk(
   'users/updateUser',
   async ({ id, username, role, onSuccess, onError }, { rejectWithValue }) => {
      try {
         const response = await Put(`/api/users/${id}`, { username, role });
         if (onSuccess) onSuccess(response.data);
         return response.data;
      } catch (error) {
         if (onError) onError(error);
         return rejectWithValue(error.response.data);
      }
   }
);

export const fetchUsers = createAsyncThunk(
   'users/fetchUsers',
   async ({ onSuccess, onError }, { rejectWithValue }) => {
      try {
         const response = await Get('/api/users');
         if (onSuccess) onSuccess(response.data);
         return response.data;
      } catch (error) {
         if (onError) onError(error);
         return rejectWithValue(error.response.data);
      }
   }
);

export const deleteUser = createAsyncThunk(
   'users/deleteUser',
   async ({ id, onSuccess, onError }, { rejectWithValue }) => {
      try {
         await Delete(`/api/users/${id}`);
         if (onSuccess) onSuccess(id);
         return id;
      } catch (error) {
         if (onError) onError(error);
         return rejectWithValue(error.response.data);
      }
   }
);

//ANALYTICS
export const fetchAnalytics = createAsyncThunk(
   'analytics/fetchAnalytics',
   async (_, { rejectWithValue }) => {
      try {
         const response = await Get('/api/analytics/admin')
         return response.data;
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
);
//logs

export const fetchActivityLogs = createAsyncThunk(
   'activityLogs/fetchActivityLogs',
   async (_, { rejectWithValue }) => {
      try {
         const response = await Get('/api/activity-logs');
         return response.data;
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
   }
);

export const fetchDocuments = createAsyncThunk('admin/fetchDocuments', async (_, { rejectWithValue }) => {
   try {
      const response = await Get('/api/documents');
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});

export const updateDocumentStatus = createAsyncThunk('admin/updateDocumentStatus', async ({ documentId, status }, { rejectWithValue }) => {
   try {
      const response = await Post(`/api/documents/status`, { status, documentId });
      return response.data;
   } catch (error) {
      return rejectWithValue(error.response.data);
   }
});