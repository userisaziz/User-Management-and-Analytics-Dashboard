import React, { useState } from 'react';
import { Button, Checkbox, Input, Typography } from '../../../components';
import { useNavigate } from 'react-router-dom';
import './LoginView.scss';
import { pathname } from '../../../router/pathname';
import EyeHide from '../../../assets/icon/EyeHide/EyeHide';
import EyeShow from '../../../assets/icon/EyeShow/EyeShow';
import initialValues from './Form/initialFieldValues';
import formValidationSchema from './Form/formValidationSchema';
import { useFormik } from 'formik';
import { useAuthenticateUser } from '../../../services';
import { InvalidIcon } from '../../../assets/icon';
import { localStorageKey } from '../../../Keys';
import { useDispatch } from 'react-redux';
import { toast } from 'sonner';

const LoginView = () => {
	const navigateTo = useNavigate();
	const dispatch = useDispatch();
	// const [checked, setChecked] = useState(false);
	const [isError, setIsError] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const authenticateUserHandlers = {
		onSuccess: (data) => handleAuthenticationSuccess(data),
		onError: (error) => handleAuthenticationError(error),
	};

	const { validationSchema } = formValidationSchema;
	const configFormik = {
		initialValues,
		validationSchema,
		onSubmit: (values) => onFormSubmit(values),
	};

	const formik = useFormik(configFormik);

	const {
		mutate: onAuthenticateUser,
		data: userAuthenticatedData,
		isLoading: isAuthenticateUserLoading,
		isError: isAuthenticateUserRejected,
		isSuccess: isAuthenticateUserSuccess,
		message: authenticateUserStatus,
	} = useAuthenticateUser(authenticateUserHandlers);

	const onFormSubmit = (values) => {
		event.preventDefault();
		console.log(values);
		onAuthenticateUser(values);
	};

	const handleAuthenticationSuccess = (response) => {
		const { data } = response;
		const authToken = data?.data?.token;
		localStorage.setItem(localStorageKey.AUTH_TOKEN, authToken);
		localStorage.setItem('store-id', data?.data?.store_id);
		localStorage.setItem('role', data?.data?.role);

		navigateTo(pathname.HOME);
		toast.success('Login successful');
		formik.resetForm();
		console.log(data);
	};

	const handleAuthenticationError = () => {
		setIsError(true);
	};

	const onChange = (value, inputType) => {
		formik.setFieldValue(inputType, value);
		setIsError(false);
	};

	const onBlur = (e) => {
		formik.handleBlur(e);
	};
	const handleForgotPassword = () => {
		navigateTo(pathname.FORGOT_PASSWORD);
	};

	const togglePasswordVisibility = () => {
		if (formik.values.password?.length > 0) setShowPassword((prevState) => !prevState);
	};
	const renderIcon = () =>
		showPassword ? (
			<EyeShow onClick={togglePasswordVisibility} className="LoginView--Icon" />
		) : (
			<EyeHide onClick={togglePasswordVisibility} className="LoginView--Icon" />
		);

	return (
		<div>
			<div className="LoginView--GreetingsDiv">
				<Typography className="LoginView--Greetings">Good morning </Typography>
				<Typography className="LoginView--LoginText">Login to access</Typography>
			</div>
			{/* <FormLayout title={'Sign In'} className="LoginView--FormLayout"> */}
			<form noValidate onSubmit={formik.handleSubmit}>
				<div className="LoginView--InputBox">
					<Input
						label="Username"
						id="username"
						name="username"
						className="LoginView--Input"
						placeholder="Enter your registered email"
						type="text"
						isRequired={true}
						onChange={(e) => onChange(e.target.value, 'username')}
						onBlur={(e) => onBlur(e)}
						value={formik.values.username}
						isError={formik.touched.username && formik.errors.username}
						errorMessage={formik.errors.username}
						isDisabled={isAuthenticateUserLoading}
					/>
					<Input
						label="Password"
						id="password"
						name="password"
						className="LoginView--Input"
						placeholder="Password"
						type={showPassword ? 'text' : 'password'}
						isRequired={true}
						onChange={(e) => {
							onChange(e.target.value.replace(/\s/g, ''), 'password');
						}}
						onBlur={(e) => {
							onBlur(e);
						}}
						value={formik.values.password}
						isError={formik.touched.password && formik.errors.password}
						errorMessage={formik.errors.password}
						icon={renderIcon()}
						isDisabled={isAuthenticateUserLoading}
					/>
				</div>
				{isError && authenticateUserStatus && (
					<Typography className="LoginView--ErrorMessage">
						<InvalidIcon />
						{authenticateUserStatus}
					</Typography>
				)}
				<div className="LoginView--CheckboxContainer">
					<Checkbox
						label="Keep me signed in"
						onChange={() => onChange(!formik.values.rememberMe, 'rememberMe')}
						isChecked={formik.values.rememberMe}
						id="generic-checkbox"
					/>
				</div>
				<Button
					variant="primary"
					type="submit"
					className="LoginView--Button"
					isLoading={isAuthenticateUserLoading}
				>
					Sign In
				</Button>
			</form>
			<div className="LoginView--LinksContainer">
				{/* <span className="LoginView--ForgotLink">Forgot your password?</span> */}
				<span className="LoginView--ResetLink" onClick={handleForgotPassword}>
					Forgot your Password
				</span>
			</div>
			{/* </FormLayout> */}
		</div>
	);
};

export default LoginView;
