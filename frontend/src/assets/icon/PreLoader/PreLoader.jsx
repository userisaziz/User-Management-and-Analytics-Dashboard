import React from 'react';

const PreLoader = (props) => {
	const { strokeWidth = 2 } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="204px"
			height="204px"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			{...props}
		>
			<circle
				cx="50"
				cy="50"
				fill="none"
				stroke="#759DE6"
				strokeWidth={strokeWidth}
				r="26"
				strokeDasharray="122.52211349000194 42.840704496667314"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="0.7407407407407407s"
					values="0 50 50;360 50 50"
					keyTimes="0;1"
				></animateTransform>
			</circle>
		</svg>
	);
};

export default PreLoader;
