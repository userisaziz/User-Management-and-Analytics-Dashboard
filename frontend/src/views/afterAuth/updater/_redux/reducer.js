import { createSlice } from "@reduxjs/toolkit";
import {
   fetchDocuments,
   uploadDocument,
   fetchUpdateMetrics,
   fetchPersonalActivityLogs,
   updateDocumentStatus
} from "./actionCreator";

const updaterSlice = createSlice({
   name: 'updater',
   initialState: {
      documents: [],
      metrics: null,
      logs: [],
      status: 'idle',
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         // Handle fetchDocuments actions
         .addCase(fetchDocuments.pending, (state) => {
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

         // Handle uploadDocument actions
         .addCase(uploadDocument.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(uploadDocument.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.documents.push(action.payload);
         })
         .addCase(uploadDocument.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         })

         // Handle fetchUpdateMetrics actions
         .addCase(fetchUpdateMetrics.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchUpdateMetrics.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.metrics = action.payload;
         })
         .addCase(fetchUpdateMetrics.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
         })

         // Handle fetchPersonalActivityLogs actions
         .addCase(fetchPersonalActivityLogs.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchPersonalActivityLogs.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.logs = action.payload;
         })
         .addCase(fetchPersonalActivityLogs.rejected, (state, action) => {
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

export default updaterSlice.reducer;