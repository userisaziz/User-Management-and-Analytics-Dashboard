import { FORGOT_PASSWORD, RESET_PASSWORD } from '../../../../../api/endpoints';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Get, Post } from '../../../../../services';
export const setTitle = (state, action) => {
	state.title = action.payload;
};
export const useForgotPassword = createAsyncThunk('login/forgot', async (email, thunkAPI) => {
	try {
		let apiUrl = FORGOT_PASSWORD;
		const queryParams = [];
		if (email) queryParams.push(`email=${email}`);

		if (queryParams.length > 0) {
			apiUrl += '?' + queryParams.join('&');
		}
		const response = await Get(apiUrl);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});

export const useResetPassword = createAsyncThunk('login/reset', async (data, thunkAPI) => {
	try {
		const response = await Post(RESET_PASSWORD, data);
		return response;
	} catch (error) {
		return thunkAPI.rejectWithValue(error?.response?.message);
	}
});
