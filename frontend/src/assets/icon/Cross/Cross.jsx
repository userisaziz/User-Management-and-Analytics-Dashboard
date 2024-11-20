import React from 'react';

const Cross = ({ color = '#6F6F6F' }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<path
				d="M16.2426 7.75738L7.75732 16.2427M16.2426 16.2426L7.75732 7.75732"
				stroke={color}
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Cross;
