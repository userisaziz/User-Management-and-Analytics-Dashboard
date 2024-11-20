import React, { useEffect, useState } from 'react';
import { Button, Input, Typography } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import './ResetPassword.scss';
import FormLayout from '../../../../components/Layout/FormLayout/FormLayout';
import { pathname } from '../../../../router/pathname';
import { InfoIcon } from '../../../../assets/icon';
import { useFormik } from 'formik';
import initialValues from './Form/initialFieldValues';
import formValidationSchema from './Form/formValidationSchema';
import { useResetPassword } from '../../../../services/LoginServices/LoginServices';
import { toast } from 'sonner';

const webURL = new URL(window.location.href);

const ResetPassword = () => {
	const navigateTo = useNavigate();
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const resetId = webURL.searchParams.get('reset_id');
		if (resetId) {
			sessionStorage.setItem('reset_id', resetId);
		}
	}, []);

	const ResetPasswordHandlers = {
		onSuccess: (data) => handleResetPasswordSuccess(data),
		onError: (error) => handleResetPasswordError(error),
	};

	const { validationSchema } = formValidationSchema;
	const configFormik = {
		initialValues,
		validationSchema,
		onSubmit: (values) => onFormSubmit(values),
	};

	const formik = useFormik(configFormik);

	const {
		mutate: onResetPassword,
		isLoading: isResetPasswordLoading,
		message: ResetPasswordStatus,
	} = useResetPassword(ResetPasswordHandlers);

	const onFormSubmit = (values) => {
		console.log('values: ', values);
		const resetId = sessionStorage.getItem('reset_id');
		const payload = {
			password: values.newPassword,
			token: resetId,
		};
		onResetPassword(payload);
	};

	const handleResetPasswordSuccess = (response) => {
		navigateTo(pathname.LOGIN);
		toast.success('Reset Password Success');
		formik.resetForm();
	};

	const handleResetPasswordError = () => {
		setIsError(true);
		toast.error('Something went wrong');
	};

	const onChange = (value, inputType) => {
		formik.setFieldValue(inputType, value);
		setIsError(false);
	};

	const onBlur = (e) => {
		formik.handleBlur(e);
	};

	return (
		<FormLayout
			className="ResetPassword--FormLayout"
			title="Change your password"
			// subTitle="A reset email will be sent to your email id"
		>
			<form noValidate onSubmit={formik.handleSubmit}>
				<Input
					className="ResetPassword--Input"
					id="newPassword"
					name="newPassword"
					placeholder="Enter New Password"
					type="password"
					isRequired={true}
					onChange={(e) => onChange(e.target.value, 'newPassword')}
					onBlur={(e) => onBlur(e)}
					value={formik.values.newPassword}
					isError={formik.touched.newPassword && formik.errors.newPassword}
					errorMessage={formik.errors.newPassword}
					// isDisabled={isResetPasswordLoading}
				/>
				{isError && (
					<Typography className="ResetPassword--ErrorMessage">
						<InfoIcon />
						{ResetPasswordStatus}
					</Typography>
				)}
				<div className="ResetPassword--ButtonContainer">
					<Button
						type="submit"
						variant="primary"
						isLoading={isResetPasswordLoading}
						className="ResetPassword--Button"
					>
						Reset password
					</Button>
				</div>
			</form>
		</FormLayout>
	);
};

export default ResetPassword;
