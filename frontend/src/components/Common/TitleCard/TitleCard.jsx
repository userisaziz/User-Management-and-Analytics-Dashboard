import React from 'react';
import './TitleCard.scss';
import Typography from '../Typography/Typography';

const TitleCard = ({ title, prefix, children, className, subTitle, suffix, titleClassName }) => {
	return (
		<div className="TitleCardDiv">
			<div className={`TitleCard--TitleCardTitleDiv ${titleClassName}`}>
				<div className={`TitleCard--Title`}>
					<Typography className="TitleCard--Title">
						{title}
						<div className="TitleCard--SubTitle">{subTitle}</div>
					</Typography>
					<div className={`TitleCard--Suffix`}>{prefix}</div>
				</div>
				<div className={`TitleCard--Suffix`}>{suffix}</div>
			</div>
			<div className={`TitleCard--Content ${className}`}>{children}</div>
		</div>
	);
};

export default TitleCard;
