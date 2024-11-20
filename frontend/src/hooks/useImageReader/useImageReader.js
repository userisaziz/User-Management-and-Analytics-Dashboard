import React, { useState } from 'react';

export const useImageReader = () => {
	const [imageUrl, setImageUrl] = useState('');
	const [fileName, setFileName] = useState('');
	const [fileSize, setFileSize] = useState('');
	const [fileImportStatus, setFileImportStatus] = useState(0);

	const calculateFileSize = (size) => {
		const calculatedFileSize = `${Math.round(size / 1024)}KB`;
		setFileSize(calculatedFileSize);
	};

	const handleImageLoad = (event) => {
		setImageUrl(event.target.result);
		setFileImportStatus(100);
	};

	const handleImageProgress = (event) => {
		if (event.lengthComputable) {
			const progress = (event.loaded / event.total) * 100;
			setFileImportStatus(progress);
		}
	};

	const readImage = (file) => {
		setFileName(file?.name);
		calculateFileSize(file?.size);
		const reader = new FileReader();
		reader.onprogress = handleImageProgress;
		reader.onload = handleImageLoad;
		reader.onprogress = handleImageProgress;
		if (file) reader.readAsDataURL(file);
	};

	return [imageUrl, fileSize, readImage, setImageUrl, fileName, setFileName, fileImportStatus];
};
