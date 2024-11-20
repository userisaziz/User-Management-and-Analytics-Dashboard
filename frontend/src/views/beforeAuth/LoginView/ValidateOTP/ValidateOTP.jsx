import React, { useState } from 'react';
import { Button, Checkbox, Input, OTPInput, Typography } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import './ValidateOTP.scss';
import FormLayout from '../../../../components/Layout/FormLayout/FormLayout';
import { pathname } from '../../../../router/pathname';
import { LeftArrow } from '../../../../assets/icon';

const ValidateOTP = () => {
	const navigateTo = useNavigate();
	const [enteredOTP, setEnteredOTP] = useState('');
	const [otpError, setOtpError] = useState(false);

	const handleVerifyOTP = () => {
		if (enteredOTP.length === 6) {
			const dummyOTP = '123456';
			if (enteredOTP === dummyOTP) {
				alert('Correct OTP entered. Proceed with verification.');
				setOtpError(false);
			} else {
				alert('Incorrect OTP entered');
				setOtpError(true);
				setEnteredOTP('');
			}
		} else {
			console.log('Please enter a valid OTP.');
		}
	};

	const handleOTPInput = (index, value) => {
		setEnteredOTP((prevOTP) => {
			const updatedOTP = [...prevOTP];
			updatedOTP[index] = value;
			return updatedOTP.join('');
		});
	};
	const handleBackToLogin = () => {
		navigateTo(pathname.LOGIN);
	};
	return (
		<FormLayout
			className="ValidateOTP--FormLayout"
			title={'Validate OTP'}
			subTitle={'Enter otp which is sent to your email id'}
		>
			<div>
				<OTPInput
					length={6}
					onInput={handleOTPInput}
					isError={otpError}
					errorMessage="Incorrect OTP. Please try again."
				/>
			</div>

			<div className="ValidateOTP--ButtonContainer">
				<Button variant="primary" onClick={handleVerifyOTP} className="ValidateOTP--Button">
					Verify
				</Button>
			</div>
			<div className="ValidateOTP--LinksContainer" onClick={handleBackToLogin}>
				<LeftArrow />
				<span className="ValidateOTP--ForgotLink">Back to Login</span>
			</div>
		</FormLayout>
	);
};

export default ValidateOTP;
