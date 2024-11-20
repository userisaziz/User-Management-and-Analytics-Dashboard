import React from 'react';
import './BlueWave.scss';

const EmptyWave = ({ width }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="Responsive" style={{ width: width }}>
			<line x1="0" y1="50" x2="100" y2="50" stroke="#759DE6" strokeWidth="1" />
		</svg>
	);
};

export default EmptyWave;
