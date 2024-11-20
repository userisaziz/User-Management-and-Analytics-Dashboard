import * as Yup from 'yup';
const formValidationSchema = {
	validationSchema: Yup.object().shape({
		newPassword: Yup.string()
			.required('New Password is required')
			.min(8, 'Password must be minimum 8 character long')
			.max(15, 'Password must be maximum 15 character long')
			.notOneOf([Yup.ref('oldPassword'), null], 'New password must be different from old password'),
		// confirmNewPassword: Yup.string()
		// 	.required('Confirm password is required')
		// 	.min(8, 'Password must be minimum 8 character long')
		// 	.max(15, 'Password must be maximum 15 character long')
		// 	.oneOf([Yup.ref('newPassword'), null], 'Confirm Passwords not matches with New password'),
	}),
};

export default formValidationSchema;
