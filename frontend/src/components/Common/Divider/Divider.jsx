import React from 'react';
import './Divider.scss';
const Divider = ({ width, color, margin, text }) => {
	const dividerStyle = {
		width: width || '100%',
		height: '1px',
		backgroundColor: color || '#BFBFBF',
		margin: margin || 0,
	};
	const textStyle = {};
	return (
		<div className="Divider">
			<div style={dividerStyle}></div>
			<div style={textStyle}>{text}</div>
			<div style={dividerStyle}></div>
		</div>
	);
};

export default Divider;
