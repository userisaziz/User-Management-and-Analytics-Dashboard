import React from 'react';

const UserIcon = ({ props }) => {
	return (
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
				<ellipse
					cx="28.0001"
					cy="40.8334"
					rx="16.3333"
					ry="8.16667"
					stroke="#FF6B6B"
					strokeWidth="2.8"
					strokeLinejoin="round"
				/>
				<circle
					cx="28.0001"
					cy="16.3333"
					r="9.33333"
					stroke="#FF6B6B"
					strokeWidth="2.8"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default UserIcon;
