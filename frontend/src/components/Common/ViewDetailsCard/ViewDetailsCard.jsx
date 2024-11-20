import React from 'react';
import { Box, Typography } from '../../Common';
import './ViewDetailsCard.scss';

const ViewDetailsCard = (props) => {
	const { title, className, children, icon, isGridLayout } = props;

	const customClassName = `ViewDetailsCard ${className}`;

	const isApplyGrid = isGridLayout ? `ViewDetailsCard--GridDescription` : `ViewDetailsCard--Description`;
	return (
		<Box className={customClassName}>
			<div className="ViewDetailsCard--Header">
				<Typography className="ViewDetailsCard--Title" variant="h1">
					{title}
				</Typography>
				{icon}
			</div>

			<section className={isApplyGrid}>{children}</section>
		</Box>
	);
};

export default ViewDetailsCard;
