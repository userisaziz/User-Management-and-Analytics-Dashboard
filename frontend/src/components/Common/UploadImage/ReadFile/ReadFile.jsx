import React, { useState } from 'react';
import ReadImage from '../ReadImage/ReadImage';
import './ReadFile.scss';
const ReadFile = (props) => {
	const { files, onRemove, isLoading } = props;

	return (
		<section className="ReadFile">
			{files?.map((file) => (
				<ReadImage file={file} key={file?.id} onRemove={onRemove} isLoading={isLoading} />
			))}
		</section>
	);
};

export default ReadFile;
