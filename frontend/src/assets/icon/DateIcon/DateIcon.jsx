import React from 'react';

const DateIcon = ({ color = '759DE6' }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" width={16} height={17} viewBox="0 0 16 17" fill="none">
				<path
					d="M0 14.1C0 15.46 1.04 16.5 2.4 16.5H13.6C14.96 16.5 16 15.46 16 14.1V7.7H0V14.1ZM13.6 2.1H12V1.3C12 0.82 11.68 0.5 11.2 0.5C10.72 0.5 10.4 0.82 10.4 1.3V2.1H5.6V1.3C5.6 0.82 5.28 0.5 4.8 0.5C4.32 0.5 4 0.82 4 1.3V2.1H2.4C1.04 2.1 0 3.14 0 4.5V6.1H16V4.5C16 3.14 14.96 2.1 13.6 2.1Z"
					fill={color}
				/>
			</svg>
		</>
	);
};

export default DateIcon;
