import React from 'react';
import './SecondaryCard.scss';
const SecondaryCard = ({ children, className, onClick }) => {
	return (
		<div className={`SecondaryCard ${className}`} onClick={onClick}>
			{children}
		</div>
	);
};

export default SecondaryCard;
