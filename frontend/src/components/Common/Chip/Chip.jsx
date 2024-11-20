import React from 'react';
import './Chip.scss';

const Chip = (props) => {
	const { label, isActive, onClick, className, icon } = props;

	return (
		<div className={`Chip Chip--${isActive ? 'Active' : 'Inactive'} ${className}`} onClick={onClick}>
			{icon && <div className="ChipIcon">{icon}</div>}
			{label}
		</div>
	);
};

export default Chip;
