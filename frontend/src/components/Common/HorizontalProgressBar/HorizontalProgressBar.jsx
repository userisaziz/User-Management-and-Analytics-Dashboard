import React, { useEffect, useState } from 'react';
import './HorizontalProgressBar.scss';

const HorizontalProgressBar = ({ percentage = 50 }) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(percentage);
	}, [percentage]);

	return (
		<div className="horizontal-progress-bar">
			<div className="progress" style={{ width: `${width}%` }} />
		</div>
	);
};

export default HorizontalProgressBar;
