import React from 'react';
import TitleCard from '../../../../../components/Common/TitleCard/TitleCard';
import HorizontalBarChart from '../../../../../charts/HorizontalBarChart/HorizontalBarChart';
import './InteractionChart.scss';
import ContentLoader from 'react-content-loader';
import BarChartComponent from '../../../../../charts/BarChart';

const InteractionChart = ({ subTitle, data, loading }) => {
	const roleData = [
		{ role: 'Admin', count: 10 },
		{ role: 'Updater', count: 20 },
		{ role: 'Viewer', count: 50 },
		{ role: 'SED1', count: 15 },
	];

	return (
		<TitleCard title="No of Interaction | " className={'InteractionChart'} subTitle={subTitle}>
			<HorizontalBarChart data={roleData.map((item) => item.count)} labels={roleData.map((item) => item.role)} />
			{/* <BarChartComponent data={roleData} xKey="role" yKey="count" barColor="red" /> */}
		</TitleCard>
	);
};

export default InteractionChart;
