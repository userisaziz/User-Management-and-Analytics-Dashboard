import React from 'react';
import './Keywords.scss';
import Typography from '../Typography/Typography';
const Keywords = ({ keyword = 'Keyword 1', value }) => {
	return (
		<div className="Keywords">
			<Typography className="Keywords--Title">
				{keyword}{' '}
				<Typography variant="span" className="Keywords--TitleBold">
					{value && { value }}
				</Typography>
			</Typography>
		</div>
	);
};

export default Keywords;
