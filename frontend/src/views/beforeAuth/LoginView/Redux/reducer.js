import { createSlice } from '@reduxjs/toolkit';
import { useLogin, setTitle } from './actionCreator';

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      isError: false,
      isLoading: false,
      statusMessage: ""
   },
   reducers: {
      setAuthSlice: useLogin
   }, extraReducers: (builder) =>
      builder
         .addCase(useLogin.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
         })
         .addCase(useLogin.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.statusMessage = action.payload;

         })
         .addCase(useLogin.rejected, (state, action) => {
            state.isError = true;
            state.isLoading = false;
            state.statusMessage = action.payload;
         })

});

export const { setAuthSlice } = authSlice.actions;
export default authSlice.reducer;
