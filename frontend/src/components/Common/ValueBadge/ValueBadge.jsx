import React from 'react';
import './ValueBadge.scss';
import Typography from '../Typography/Typography';
const ValueBadge = (props) => {
	const { icon, value } = props;
	return (
		<div className="ValueBadge">
			{icon && <div className="ValueBadge--Icon">{icon}</div>}
			<Typography className="ValueBadge--Text">{value}</Typography>
		</div>
	);
};

export default ValueBadge;
