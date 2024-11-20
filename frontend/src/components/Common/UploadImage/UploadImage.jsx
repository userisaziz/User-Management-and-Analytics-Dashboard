import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { HelperText, ValidateFiles, FileRequiredError, FileValidationError } from './Helper/Helper';
import { DragAndDrop, UploadFile } from '../../../assets/icon';

import Input from '../Input/Input';
import Button from '../Button/Button';
import ReadFile from './ReadFile/ReadFile';
import Typography from '../Typography/Typography';

import './UploadImage.scss';

const UploadImage = (props) => {
	const { onSelect, isLoading, className, isUploadFileSuccess, acceptedFormate = ['.png', '.jpg', '.jpeg'] } = props;

	const fileRequiredErrorMessage = props.isError;
	const isFileRequiredError = Boolean(props.isError);
	const validFormate = acceptedFormate.map((item) => ` ${item}`);

	const inputRef = useRef(null);

	const [isError, isSetError] = useState(false);
	const [dragActive, setDragActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [selectedFiles, setSelectedFiles] = useState([]);

	const customClassName = `UploadImage ${className}`;

	const fileFormateErrorClassName =
		isError || isFileRequiredError ? 'UploadImage--BorderDashedError' : 'UploadImage--BorderDashed';

	const onBrowseFile = () => inputRef.current.click();

	const onDrag = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragActive(true);
		} else if (e.type === 'dragleave') {
			setDragActive(false);
		}
	};

	const onRestComponent = () => {
		isSetError(false);
		setErrorMessage('');
		setDragActive(false);
		setSelectedFiles([]);
	};

	const formateSelectedFiles = (files) => {
		const formateFilesWithId = files?.map((file) => {
			file.id = uuidv4();
			return file;
		});
		return formateFilesWithId;
	};

	const handleReadSelectedFiles = (files) => {
		const isSelectedFilesValid = ValidateFiles(files, acceptedFormate);

		if (isSelectedFilesValid) {
			const formattedFiles = formateSelectedFiles(files);
			setSelectedFiles([...selectedFiles, ...formattedFiles]);
			isSetError(false);
			setErrorMessage('');
		} else {
			const message = `Invalid file format. Accepted formats are ${validFormate}`;
			isSetError(true);
			setErrorMessage(message);
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files) {
			const files = Array.from(e.dataTransfer.files);
			handleReadSelectedFiles(files);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		if (e.target.files) {
			const files = Array.from(e.target.files);
			handleReadSelectedFiles(files);
		}
	};

	const handleRemoveFile = (fileId) => {
		const updatedFileCollection = selectedFiles.filter((file) => file?.id !== fileId);
		setSelectedFiles([...updatedFileCollection]);
	};

	useEffect(() => {
		if (isUploadFileSuccess) onRestComponent();
	}, [isUploadFileSuccess]);

	useEffect(() => {
		if (selectedFiles) {
			onSelect(selectedFiles);
		}
	}, [selectedFiles]);

	return (
		<React.Fragment>
			<ReadFile files={selectedFiles} onRemove={(fileId) => handleRemoveFile(fileId)} isLoading={isLoading} />
			<div className={customClassName}>
				<form
					onDragEnter={onDrag}
					onDragOver={onDrag}
					onDragLeave={onDrag}
					onDrop={handleDrop}
					onSubmit={(e) => e.preventDefault()}
					className="UploadImage--Form"
				>
					<Input
						{...props}
						type="file"
						className="UploadImage--FileUpload"
						ref={inputRef}
						onChange={handleChange}
						multiple={true}
					/>

					<React.Fragment>
						<section className={fileFormateErrorClassName}>
							<div className="UploadImage--Icon">
								<UploadFile />
							</div>

							<Typography className="UploadImage--Heading">Drag & Drop files here</Typography>

							<HelperText isError={isError} isFileRequiredError={isFileRequiredError}>
								Accepted formats: {validFormate}
							</HelperText>

							<Button
								className="UploadImage--BrowserButton"
								variant="secondary"
								type="button"
								onClick={onBrowseFile}
								isDisabled={isLoading}
							>
								Upload picture
							</Button>

							<FileValidationError isError={isError} isFileRequiredError={isFileRequiredError}>
								{errorMessage}
							</FileValidationError>

							<FileRequiredError isFileRequiredError={isFileRequiredError}>
								{fileRequiredErrorMessage}
							</FileRequiredError>
						</section>
						{dragActive && (
							<div
								onDragEnter={onDrag}
								onDragLeave={onDrag}
								onDragOver={onDrag}
								onDrop={handleDrop}
							></div>
						)}
					</React.Fragment>
				</form>
			</div>
		</React.Fragment>
	);
};

export default UploadImage;
