import React from 'react';
import { CrossMark, TickMark } from '../../assets/icon';
import { Typography } from '../../components';

const CustomLabel = () => {
	return (
		<div className="ViewInteractionDetails--Legend">
			<div className="ViewInteractionDetails--LegendContent">
				<TickMark />{' '}
				<Typography variant="span" className="ViewInteractionDetails--LegendTitle">
					{interactionDetails?.touch_points?.total_true}
				</Typography>
			</div>
			<div className="ViewInteractionDetails--LegendContent">
				<CrossMark />
				<Typography variant="span" className="ViewInteractionDetails--LegendTitle">
					{interactionDetails?.touch_points?.total_false}
				</Typography>
			</div>
		</div>
	);
};

export default CustomLabel;
