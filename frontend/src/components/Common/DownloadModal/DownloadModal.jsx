import React, { useState } from 'react';

import useDownloader from 'react-use-downloader';
import { toast } from 'sonner';
import Modal from '../Modal/Modal';
import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../Button/Button';

const DownloadModal = ({ isOpen, onClose, fileUrl, filename }) => {
	const { size, elapsed, percentage, download, cancel, error, isInProgress } = useDownloader();
	const sizeDownloadedBytes = (percentage / 100) * size;

	// Convert bytes to megabytes
	const sizeDownloadedMB = (sizeDownloadedBytes / 1024 / 1024).toFixed(2);
	const totalSizeMB = (size / 1024 / 1024).toFixed(2);

	const handleDownload = () => {
		download(fileUrl, filename)
			.then(() => {
				onClose(false);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	return (
		<Modal onClose={() => onClose(false)} isOpen={isOpen}>
			<label htmlFor="file" className="ViewInteractionDetails--DownloadProgress">
				Downloading {isInProgress ? 'in progress' : 'stopped'}:
			</label>
			<ProgressBar progress={percentage} />
			<div className="ViewInteractionDetails--ElapsedContainer">
				<p className="ViewInteractionDetails--ElapsedTime">Elapsed time in seconds {elapsed}</p>
				<p className="ViewInteractionDetails--SizeDownloaded">
					{totalSizeMB}/{sizeDownloadedMB} MB downloaded
				</p>
			</div>
			<div className="ViewInteractionDetails--ButtonDiv">
				<Button onClick={handleDownload}>Download</Button>
				<Button variant={'secondary'} onClick={() => cancel()}>
					Cancel
				</Button>
			</div>
			{error && <p className="ViewInteractionDetails--ErrorMsg">{error.errorMessage}</p>}
		</Modal>
	);
};

export default DownloadModal;
