import React from 'react';
import './StatusIndicator.scss';

const StatusIndicator = (props) => {
	const { variant, text } = props;
	return <div className={`StatusIndicator StatusIndicator--${variant}`}>{text}</div>;
};

export default StatusIndicator;
