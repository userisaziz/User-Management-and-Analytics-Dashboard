// import React, { useState } from 'react';
// import { Button, Checkbox, Input, Typography } from '../../../../components';
// import { useNavigate } from 'react-router-dom';
// import './ForgotPassword.scss';
// import FormLayout from '../../../../components/Layout/FormLayout/FormLayout';
// import { pathname } from '../../../../router/pathname';
// import { LeftArrow } from '../../../../assets/icon';
// import { useSendPassword } from '../../../../services/LoginServices/LoginServices';
// import { useFormik } from 'formik';
// import initialValues from './Form/initialValue';
// import formValidationSchema from './Form/formValidationSchema';
// const ForgotPassword = () => {
// 	const navigateTo = useNavigate();
// 	const { validationSchema } = formValidationSchema;
// 	const configFormik = {
// 		initialValues,
// 		validationSchema,
// 		onSubmit: (values) => onFormSubmit(values),
// 	};
// 	const formik = useFormik(configFormik);
// 	const [input, setInput] = useState('');
// 	const [isError, setIsError] = useState(false);
// 	const {
// 		data: sendPasswordData,
// 		message: sendPasswordStatus,
// 		isLoading: isSendPasswordLoading,
// 		isError: isSendPasswordRejected,
// 		isSuccess: isSendPasswordSuccess,
// 	} = useSendPassword(formik.values.email);

// 	// const handleButtonClick = () => {
// 	// 	alert('button clicked');
// 	// };
// 	const onChange = (value, inputType) => {
// 		formik.setFieldValue(inputType, value);
// 		setIsError(false);
// 	};

// 	const onBlur = (e) => {
// 		formik.handleBlur(e);
// 	};

// 	const handleBackToLogin = () => {
// 		navigateTo(pathname.LOGIN);
// 	};
// 	const onFormSubmit = (values) => {
// 		event.preventDefault();
// 		console.log(values);
// 		useSendPassword(values);
// 	};
// 	return (
// 		<FormLayout
// 			className="ForgotPassword--FormLayout"
// 			title="Forgot Password"
// 			subTitle="A reset email will be sent to your email id"
// 		>
// 			<form noValidate onSubmit={formik.handleSubmit}>
// 				<Input
// 					className="ForgotPassword--Input"
// 					placeholder="Enter email"
// 					type="email"
// 					isRequired={true}
// 					onChange={(e) => onChange(e.target.value, 'email')}
// 					onBlur={(e) => onBlur(e)}
// 					value={formik.values.email}
// 					isError={formik.touched.email && formik.errors.email}
// 					errorMessage={formik.errors.email}
// 				/>

// 				<div className="ForgotPassword--ButtonContainer">
// 					<Button
// 						variant="primary"
// 						// isDisabled={isSendPasswordLoading}
// 						// onClick={handleButtonClick}
// 						className="ForgotPassword--Button"
// 					>
// 						Submit
// 					</Button>
// 				</div>
// 				<div className="ForgotPassword--LinksContainer" onClick={handleBackToLogin}>
// 					<LeftArrow />
// 					<span className="ForgotPassword--ForgotLink">Back to Login</span>
// 				</div>
// 			</form>
// 		</FormLayout>
// 	);
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import { Button, Input, Typography } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.scss';
import FormLayout from '../../../../components/Layout/FormLayout/FormLayout';
import { pathname } from '../../../../router/pathname';
import { LeftArrow } from '../../../../assets/icon';
import { useSendPassword } from '../../../../services/LoginServices/LoginServices';
import { useFormik } from 'formik';
import initialValues from './Form/initialValue';
import formValidationSchema from './Form/formValidationSchema';
import { useForgotPassword } from './Redux/actionCreator';
import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
	const navigateTo = useNavigate();
	const dispatch = useDispatch();
	const { validationSchema } = formValidationSchema;
	const [isError, setIsError] = useState(false);
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: async (values) => {
			try {
				const { email } = values;
				await dispatch(useForgotPassword(email));
				// Assuming useSendPassword updates state or handles side effects
				navigateTo(pathname.LOGIN);
			} catch (error) {
				console.error('Error sending password reset:', error);
				setIsError(true);
			}
		},
	});

	const handleBackToLogin = () => {
		navigateTo(pathname.LOGIN);
	};

	return (
		<div>
			{/* <FormLayout
				className="ForgotPassword--FormLayout"
				title="Forgot Password"
				subTitle="A reset email will be sent to your email id"
			> */}
			<div className="LoginView--GreetingsDiv">
				<Typography className="LoginView--LoginText">New Password</Typography>
				<Typography className="LoginView--Greetings">
					Please enter your email address to receive a verification code{' '}
				</Typography>
			</div>
			<form noValidate onSubmit={formik.handleSubmit}>
				<Input
					label="Enter email"
					className="ForgotPassword--Input"
					placeholder="Enter email"
					type="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && formik.errors.email}
					errorMessage={formik.errors.email}
				/>

				<div className="ForgotPassword--ButtonContainer">
					<Button variant="primary" type="submit" className="ForgotPassword--Button">
						Submit
					</Button>
				</div>
				<div className="ForgotPassword--LinksContainer" onClick={handleBackToLogin}>
					<LeftArrow />
					<span className="ForgotPassword--ForgotLink">Back to Login</span>
				</div>
			</form>
			{/* </FormLayout> */}
		</div>
	);
};

export default ForgotPassword;
