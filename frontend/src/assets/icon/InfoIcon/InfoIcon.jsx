import React from 'react';

const InfoIcon = ({ ...props }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
			<path
				d="M7.55556 12H8.44444V7.11111H7.55556V12ZM8 5.84622C8.15526 5.84622 8.28504 5.79378 8.38933 5.68889C8.49422 5.584 8.54667 5.45422 8.54667 5.29956C8.54667 5.1443 8.49422 5.01422 8.38933 4.90933C8.28504 4.80444 8.15526 4.752 8 4.752C7.84474 4.752 7.71496 4.80444 7.61067 4.90933C7.50578 5.01422 7.45333 5.1443 7.45333 5.29956C7.45333 5.45422 7.50578 5.584 7.61067 5.68889C7.71496 5.79378 7.84474 5.84622 8 5.84622ZM8.00267 16C6.89689 16 5.85689 15.7902 4.88267 15.3707C3.90904 14.9505 3.06193 14.3804 2.34133 13.6604C1.62074 12.941 1.05037 12.0948 0.630222 11.1218C0.210074 10.1487 0 9.10904 0 8.00267C0 6.89689 0.209778 5.85689 0.629333 4.88267C1.04948 3.90904 1.61956 3.06193 2.33956 2.34133C3.05896 1.62074 3.90519 1.05037 4.87822 0.630222C5.85126 0.210074 6.89096 0 7.99733 0C9.10311 0 10.1431 0.209778 11.1173 0.629333C12.091 1.04948 12.9381 1.61956 13.6587 2.33956C14.3793 3.05896 14.9496 3.90519 15.3698 4.87822C15.7899 5.85126 16 6.89096 16 7.99733C16 9.10311 15.7902 10.1431 15.3707 11.1173C14.9505 12.091 14.3804 12.9381 13.6604 13.6587C12.941 14.3793 12.0948 14.9496 11.1218 15.3698C10.1487 15.7899 9.10904 16 8.00267 16Z"
				fill="#284374"
			/>
		</svg>
	);
};

export default InfoIcon;