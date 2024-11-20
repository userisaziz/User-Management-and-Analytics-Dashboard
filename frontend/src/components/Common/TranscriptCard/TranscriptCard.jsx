import React from 'react';
import { Profile } from '../../../assets/images';
import Typography from '../Typography/Typography';
import './TranscriptCard.scss';
const TranscriptCard = () => {
	return (
		<div className="TranscriptCard">
			<div className="TranscriptCard--Left">
				<div className="TranscriptCard--Top">
					<Typography className="TranscriptCard--Speaker">Salesperson</Typography>
				</div>
				<div className="TranscriptCard--Bottom">
					<Typography className="TranscriptCard--Words">Hello Sir! Weclome to Tanishq</Typography>
				</div>
			</div>
			<div className="TranscriptCard--Right">
				<Typography className="TranscriptCard--Duration">[00:00]</Typography>
			</div>
		</div>
	);
};

export default TranscriptCard;
