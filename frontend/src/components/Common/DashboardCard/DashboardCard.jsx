import React from 'react';
import './DashboardCard.scss';

import Typography from '../Typography/Typography';
import SkeletonElement from '../../skeletons/SkeletonElement';
import SkeletonCard from '../../skeletons/SkeletonCard';

const DashboardCard = (props) => {
	const { icon, heading = '-', subheading, onClick, className, loading } = props;
	if (loading) {
		return (
			<div className={`DashboardCard ${className}`} onClick={onClick}>
				<div className="DashboardCard--Left">{icon}</div>

				<SkeletonCard />
			</div>
		);
	}
	return (
		<div className={`DashboardCard ${className}`} onClick={onClick}>
			<div className="DashboardCard--Left">{icon}</div>
			<div className="DashboardCard--Right">
				<Typography className="DashboardCard--Heading">{heading}</Typography>
				<Typography className="DashboardCard--SubHeading">{subheading}</Typography>
			</div>
		</div>
	);
};

export default DashboardCard;
