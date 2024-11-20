import React from 'react';
import './GreenWave.scss';

const GreenWave = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="Responsive">
			<rect x="48" y="5" width="2" height="90" fill="#2E8B57" className="wave-rect" />

			<rect x="43" y="15" width="2" height="70" fill="#66CC99" className="wave-rect" />
			<rect x="38" y="25" width="2" height="50" fill="#66CC99" className="wave-rect" />
			<rect x="33" y="35" width="2" height="30" fill="#A8E6CF" className="wave-rect" />
			<rect x="28" y="40" width="2" height="20" fill="#A8E6CF" className="wave-rect" />
			<rect x="23" y="45" width="2" height="10" fill="#A8E6CF" className="wave-rect" />

			<rect x="53" y="15" width="2" height="70" fill="#66CC99" className="wave-rect" />
			<rect x="58" y="25" width="2" height="50" fill="#66CC99" className="wave-rect" />
			<rect x="63" y="35" width="2" height="30" fill="#A8E6CF" className="wave-rect" />
			<rect x="68" y="40" width="2" height="20" fill="#A8E6CF" className="wave-rect" />
			<rect x="73" y="45" width="2" height="10" fill="#A8E6CF" className="wave-rect" />

			<line x1="0" y1="50" x2="100" y2="50" stroke="#759DE6" strokeWidth="1" />
		</svg>
	);
};

export default GreenWave;
