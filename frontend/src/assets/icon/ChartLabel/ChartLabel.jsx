import React from 'react';

const ChartLabel = (props) => {
	const { background } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="6" height="64" viewBox="0 0 6 64" fill="none">
			<path
				d="M0 0.683397C0 0.185958 0.647389 -0.00633293 0.918931 0.410453L5.91893 8.08487C5.97184 8.16607 6 8.2609 6 8.35781V55.6422C6 55.7391 5.97184 55.8339 5.91893 55.9151L0.918931 63.5895C0.647389 64.0063 0 63.814 0 63.3166V0.683397Z"
				fill={background}
			/>
		</svg>
	);
};

export default ChartLabel;
