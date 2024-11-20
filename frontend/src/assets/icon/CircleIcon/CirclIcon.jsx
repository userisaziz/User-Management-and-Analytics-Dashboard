import React from 'react';

const CirclIcon = ({ color = '#5988DD' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
			<circle cx={9} cy={9} r={9} fill={color} />
		</svg>
	);
};

export default CirclIcon;
