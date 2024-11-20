import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, fetchUsers, updateUser, fetchAnalytics, fetchActivityLogs, fetchDocuments, updateDocumentStatus } from "./actionCreator";



const adminSlice = createSlice({
   name: 'users',
   initialState: {
      users: [],
      status: 'idle',
      error: null,
      data: {
         activeUsers: 0,
         monthlyLogins: 0,
         newDocuments: 0,
         pendingApprovals: 0,
         roleData: [],
         activityData: [],
         documentStatusData: [],
         activityLogs: [],
         logs: [],
         status: 'idle',
         error: null,
      },
      documents: [],
      status: 'idle'
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.users = action.payload;
         })
         .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         })
         .addCase(updateUser.fulfilled, (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload.id);
            if (index !== -1) {
               state.users[index] = action.payload;
            }
         })

         .addCase(deleteUser.fulfilled, (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
         })
         .addCase(fetchAnalytics.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchAnalytics.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
         })
         .addCase(fetchAnalytics.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         })
         .addCase(fetchActivityLogs.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchActivityLogs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.logs = action.payload;
         })
         .addCase(fetchActivityLogs.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         }).addCase(fetchDocuments.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchDocuments.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.documents = action.payload;
         })
         .addCase(fetchDocuments.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         })
         .addCase(updateDocumentStatus.fulfilled, (state, action) => {
            const index = state.documents.findIndex(doc => doc.id === action.payload.id);
            if (index !== -1) {
               state.documents[index] = action.payload;
            }
         });
   }
});

export default adminSlice.reducer;