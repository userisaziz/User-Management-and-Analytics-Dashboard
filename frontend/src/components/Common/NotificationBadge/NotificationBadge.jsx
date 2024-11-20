import React from 'react';

const NotificationBadge = (props) => {
	const { indicateStatus = false, color = 'red', className, size, count } = props;
	const customClassName = `StatusIndicator ${className}`;

	const sx = {
		width: `${size}px`,
		height: `${size}px`,
		backgroundColor: color,
		top: `${props.pt}px`,
		left: `${props.pl}px`,
		right: `${props.pr}px`,
		bottom: `${props.pb}px`,
	};

	return <React.Fragment>{indicateStatus && <div className={customClassName}>{count && count}</div>}</React.Fragment>;
};

export default NotificationBadge;
