import React from 'react';
import './RoomBadge.scss';
import Typography from '../Typography/Typography';
const RoomBadge = ({ number = 1 }) => {
	return (
		<div className="RoomBadge">
			<Typography className="RoomBadge--Title">{number}</Typography>
		</div>
	);
};

export default RoomBadge;
