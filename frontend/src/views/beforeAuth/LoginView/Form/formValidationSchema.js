import * as Yup from 'yup';
import { Regex_EmailValidation } from '../../../../constant';
const formValidationSchema = {
	validationSchema: Yup.object().shape({
		username: Yup.string()
			.required('username address is required'),

		password: Yup.string()
			.required('Password is required')
			.min(8, 'Password must be minimum 8 character long')
			.max(20, 'Password must be maximum 20 character long'),
	}),
};

export default formValidationSchema;
