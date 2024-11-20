import { useMutation, useQuery } from 'react-query';
import { FORGOT_PASSWORD, RESET_PASSWORD, USER_LOGIN, VALIDATE_OTP } from '../../api/endpoints';
import { Post } from '../HttpServices/HttpServices';

export const useAuthenticateUser = (props) => {
	const response = useMutation({
		mutationKey: ['user-login'],
		mutationFn: (data) => Post(USER_LOGIN, data),
		...props,
	});

	const { data, error, isSuccess } = response;

	const statusMessage = isSuccess ? data?.message : error?.response?.data?.detail?.msg;

	return { ...response, data: data?.data?.payload, message: statusMessage };
};

export const useResetPassword = (props) => {
	const response = useMutation({
		mutationKey: ['user-pass-reset'],
		mutationFn: (data) => Post(RESET_PASSWORD, data),
		...props,
	});

	const { data, error, isSuccess } = response;

	const statusMessage = isSuccess ? data?.message : error?.response?.data?.detail?.msg;

	return { ...response, data: data?.data?.payload, message: statusMessage };
};
export const useForgotPassword = (props) => {
	const response = useMutation({
		mutationKey: ['forgot-password'],
		mutationFn: (data) => Post(FORGOT_PASSWORD, data),
		...props,
	});

	const { data, error, isSuccess } = response;

	const statusMessage = isSuccess ? data?.message : error?.response?.data?.message;

	return { ...response, data: data?.data?.payload, message: statusMessage };
};

export const useVerifyOtp = (props) => {
	const response = useMutation({
		mutationKey: ['verify-otp'],
		mutationFn: (data) => Post(VALIDATE_OTP, data),
		...props,
	});

	const { data, error, isSuccess } = response;

	const statusMessage = isSuccess ? data?.message : error?.response?.data?.message;

	return { ...response, data: data?.data?.payload, message: statusMessage };
};
export const useSendPassword = (props) => {
	const { email, ...restProps } = props;
	const response = useQuery({
		queryKey: ['use-send-password'],
		queryFn: async () => await Get(`${FORGOT_PASSWORD}?email=${email}`),
		...restProps,
	});

	const { data, error, isSuccess } = response;

	const statusMessage = isSuccess ? data?.message : error?.message;

	return {
		...response,
		data: data?.data?.payload,
		message: statusMessage,
	};
};
