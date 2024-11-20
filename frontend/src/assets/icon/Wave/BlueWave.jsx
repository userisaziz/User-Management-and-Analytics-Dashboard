import React from 'react';
import './BlueWave.scss';

const BlueWave = ({ width }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="Responsive" style={{ width: width }}>
			<rect x="48" y="15" width="2" height="70" fill="#2E86C1" className="wave-rect" />

			<rect x="43" y="25" width="2" height="50" fill="#759DE6" className="wave-rect" />
			<rect x="38" y="35" width="2" height="30" fill="#759DE6" className="wave-rect" />
			<rect x="33" y="40" width="2" height="20" fill="#A0D2EB" className="wave-rect" />
			<rect x="28" y="45" width="2" height="10" fill="#A0D2EB" className="wave-rect" />

			<rect x="53" y="25" width="2" height="50" fill="#759DE6" className="wave-rect" />
			<rect x="58" y="35" width="2" height="30" fill="#759DE6" className="wave-rect" />
			<rect x="63" y="40" width="2" height="20" fill="#A0D2EB" className="wave-rect" />
			<rect x="68" y="45" width="2" height="10" fill="#A0D2EB" />

			<line x1="0" y1="50" x2="100" y2="50" stroke="#759DE6" strokeWidth="1" />
		</svg>
	);
};

export default BlueWave;
