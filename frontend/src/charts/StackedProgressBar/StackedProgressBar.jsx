// StackedProgressBar.js

import React from 'react';
import './StackedProgressBar.scss';
import StackedLegend from './StackedLegend/StackedLegend';

const StackedProgressBar = ({ lightWidth, dangerWidth, warningWidth, successWidth, languages }) => {
	return (
		<div className="StackedProgressBar">
			{/* <div className="stacked-progress">
				<div
					className="progress-bar is-light"
					style={{ width: `${lightWidth}%` }}
					title="Amount inactive"
				></div>
				<div
					className="progress-bar is-danger"
					style={{ width: `${dangerWidth}%` }}
					title="Amount danger"
				></div>
				<div
					className="progress-bar is-warning"
					style={{ width: `${warningWidth}%` }}
					title="Amount warning"
				></div>
				<div className="progress-bar is-success" style={{ width: `${successWidth}%` }} title="Amount OK"></div>
			</div> */}
			<div className="StackedProgressBar--Legend">
				<StackedLegend languages={languages} />
			</div>
		</div>
	);
};

export default StackedProgressBar;
