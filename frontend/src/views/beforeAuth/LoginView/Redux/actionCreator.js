import { createAsyncThunk } from '@reduxjs/toolkit';
import { Get, Post } from '../../../../services';
import { USER_LOGIN, FORGOT_PASSWORD, RESET_PASSWORD } from '../../../../api/endpoints';

export const useLogin = createAsyncThunk(
   'auth/useLogin',
   async ({ payload, next, error }, thunkAPI) => {
      try {
         let apiUrl = USER_LOGIN;
         const response = await Post(apiUrl, payload);
         next()
         return response;
      } catch (err) {
         error();
         return thunkAPI.rejectWithValue(err?.response?.message);
      }
   }
);
export const setTitle = (state, action) => {
   state.title = action.payload;
};