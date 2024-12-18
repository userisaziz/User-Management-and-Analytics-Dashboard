import React from 'react';

const PauseIcon = ({ ...props }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={18} viewBox="0 0 16 18" fill="none" {...props}>
			<path
				d="M3 17.75C4.375 17.75 5.5 16.625 5.5 15.25V2.75C5.5 1.375 4.375 0.25 3 0.25C1.625 0.25 0.5 1.375 0.5 2.75V15.25C0.5 16.625 1.625 17.75 3 17.75ZM10.5 2.75V15.25C10.5 16.625 11.625 17.75 13 17.75C14.375 17.75 15.5 16.625 15.5 15.25V2.75C15.5 1.375 14.375 0.25 13 0.25C11.625 0.25 10.5 1.375 10.5 2.75Z"
				fill="#759DE6"
			/>
		</svg>
	);
};

export default PauseIcon;
