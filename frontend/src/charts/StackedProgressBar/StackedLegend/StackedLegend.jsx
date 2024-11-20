import React from 'react';
import './StackedLegend.scss';
import { Typography } from '../../../components';
import { CirclIcon } from '../../../assets/icon';
const StackedLegend = ({ languages }) => {
	return (
		<div className="StackedLegend">
			{languages?.map((language) => (
				<div className="StackedLegend--Content">
					<CirclIcon />
					<Typography className="StackedLegend--Text">{language}</Typography>
				</div>
			))}
		</div>
	);
};

export default StackedLegend;
