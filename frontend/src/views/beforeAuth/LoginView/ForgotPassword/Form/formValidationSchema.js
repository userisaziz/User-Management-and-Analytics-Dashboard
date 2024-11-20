import * as Yup from 'yup';
import { Regex_EmailValidation } from '../../../../../constant';

const formValidationSchema = {
	validationSchema: Yup.object().shape({
		email: Yup.string()
			.required('Email address is required')
			.matches(Regex_EmailValidation, 'Invalid email address'),
	}),
};

export default formValidationSchema;
