import { createSlice } from '@reduxjs/toolkit';
import { useForgotPassword, useResetPassword, setTitle } from './actionCreator';

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		loading: false,
		isError: false,
		forgotPass: '',
	},
	reducers: {
		setLoginSlice: setTitle,
	},
	extraReducers: (builder) =>
		builder
			.addCase(useForgotPassword.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(useForgotPassword.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
			})
			.addCase(useForgotPassword.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			})
			.addCase(useResetPassword.pending, (state) => {
				state.isError = false;
				state.loading = true;
			})
			.addCase(useResetPassword.fulfilled, (state, action) => {
				state.isError = false;
				state.loading = false;
			})
			.addCase(useResetPassword.rejected, (state) => {
				state.isError = true;
				state.loading = false;
			}),
});

export const { setLoginSlice } = loginSlice.actions;
export default loginSlice.reducer;
