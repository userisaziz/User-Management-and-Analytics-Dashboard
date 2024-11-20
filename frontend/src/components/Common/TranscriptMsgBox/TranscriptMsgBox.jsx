import React from 'react';
import './TranscriptMsgBox.scss';

const TranscriptMsgBox = ({ icon, variant = 'red', time, description, sop, forEvoke = false }) => {
	const formatText = (text) => {
		return text
			.split('_')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	};

	const formattedText = formatText(sop);

	return (
		<div className={`TranscriptMsgBox--Box ${variant}`}>
			{forEvoke ? (
				<>
					<div className="TranscriptMsgBox--Description">
						<span className="TranscriptMsgBox--Titles">{`${formattedText}: `}</span>
						{description}
					</div>
				</>
			) : (
				<>
					<div className="TranscriptMsgBox--Time">{time}</div>
					<div className="TranscriptMsgBox--Description">{description}</div>
				</>
			)}

			{icon && <div>{icon}</div>}
		</div>
	);
};

export default TranscriptMsgBox;
