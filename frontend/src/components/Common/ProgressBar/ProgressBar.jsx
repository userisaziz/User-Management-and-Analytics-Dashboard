import React from 'react';
import './ProgressBar.scss';

const ProgressBar = (props) => {
	const { progress, data } = props;
	const customBarStyle = {
		width: `${progress}%`,
	};

	return (
		<React.Fragment>
			{data && (
				<div className="LabelData">
					<p className="LabelData--LabelKey">{data?.key}</p>
					<p>{data?.value}</p>
				</div>
			)}
			<div className="ProgressBar">
				<div className="ProgressBar--Bar" style={customBarStyle}></div>
			</div>
		</React.Fragment>
	);
};

export default ProgressBar;
