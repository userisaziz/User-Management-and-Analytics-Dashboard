import React, { useEffect } from 'react';
import { useImageReader } from '../../../../hooks';
import Typography from '../../Typography/Typography';
import './ReadImage.scss';
import { Delete } from '../../../../assets/icon';
const ReadImage = ({ file, onRemove, isLoading }) => {
	const [imageUrl, fileSize, readImage, setImageUrl, fileName, setFileName, fileImportStatus] = useImageReader();

	const RemoveButton = ({ fileId }) => (
		<div className="ReadImage--Action">
			<Typography className="ReadImage--Remove" onClick={() => onRemove(fileId)}>
				<Delete /> Remove
			</Typography>
		</div>
	);

	useEffect(() => {
		if (file?.id) {
			readImage(file);
		}
	}, [file?.id]);

	return (
		<div className="ReadImage">
			<div className="ReadImage--FileDetails">
				<figure className="ReadImage--Image">
					{imageUrl && <img src={imageUrl} alt="" srcset="" width={50} height={50} />}
				</figure>
				{/* <div className="ReadImage--ImageDetails">
					<Typography className="ReadImage--FileName">{file?.name}</Typography>
					<Typography className="ReadImage--FileSize">{fileSize}</Typography>
				</div> */}
				{!isLoading && <RemoveButton fileId={file?.id} />}
			</div>
		</div>
	);
};

export default ReadImage;
