import React from 'react';
import Typography from '../../Typography/Typography';

export const HelperText = ({ children, isError, isFileRequiredError }) =>
	(!isError || !isFileRequiredError) && <Typography className="UploadImage--AcceptedFormate">{children}</Typography>;

export const FileValidationError = ({ isError, isFileRequiredError, children }) =>
	isError && !isFileRequiredError && <Typography className="UploadImage--ErrorText">{children}</Typography>;

export const FileRequiredError = ({ isFileRequiredError, children }) =>
	isFileRequiredError && <Typography className="UploadImage--ErrorText">{children}</Typography>;

export const ValidateFiles = (files, acceptedFormats) => {
	const fileCollections = files?.map((file) => {
		const fileExtension = file?.name?.split('.')?.pop()?.toLowerCase();
		const isValidFile = acceptedFormats.includes(`.${fileExtension}`) ? true : false;

		return isValidFile;
	});

	const hasAllValidFileCollections = fileCollections.includes(false) ? false : true;

	return hasAllValidFileCollections;
};
