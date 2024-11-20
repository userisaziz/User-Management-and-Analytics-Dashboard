import React from 'react';
import TitleCard from '../../../../../components/Common/TitleCard/TitleCard';
import { CutOutDougnut } from '../../../../../charts';
import './PurposeDefined.scss';
const PurposeDefined = ({ doughnutData, title }) => {
	return (
		<TitleCard title={title} className={'PurposeDefined'}>
			<CutOutDougnut data={doughnutData} />
		</TitleCard>
	);
};

export default PurposeDefined;
