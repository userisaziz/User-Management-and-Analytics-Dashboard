import React from 'react';
import SkeletonElement from './SkeletonElement';
import Shimmer from './Shimmer';

const SkeletonCard = ({ theme }) => {
	const themeClass = theme || 'card';
	return (
		<div className={`skeleton-wrapper2 ${themeClass}`}>
			<SkeletonElement type="title2" />
			<SkeletonElement type="title2" />
			<Shimmer />
		</div>
	);
};

export default SkeletonCard;
