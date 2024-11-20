import React from 'react';
import TitleCard from '../../../../../components/Common/TitleCard/TitleCard';
import HorizontalBarChart from '../../../../../charts/HorizontalBarChart/HorizontalBarChart';
import ContentLoader from 'react-content-loader';
import './TouchPointChart.scss';
import { Button } from '../../../../../components';
import { pathname } from '../../../../../router/pathname';
import { useNavigate } from 'react-router-dom';
import { HorizontalBar, VerticalBar } from '../../../../../charts';
const TouchPointChart = ({ data, labels, loading }) => {
	const navigate = useNavigate();
	if (loading) {
		return (
			<>
				<TitleCard title="Touchpoint Overview" className="SalespersonsTable--TouchPointChart">
					<ContentLoader height={'45vh'} width={'100%'}>
						<rect x="20" y="5" rx="0" ry="0" width="1" height="170" />
						<rect x="20" y="175" rx="0" ry="0" width="360" height="1" />
						<rect x="40" y="75" rx="0" ry="0" width="35" height="100" />
						<rect x="80" y="125" rx="0" ry="0" width="35" height="50" />
						<rect x="120" y="105" rx="0" ry="0" width="35" height="70" />
						<rect x="160" y="35" rx="0" ry="0" width="35" height="140" />
						<rect x="200" y="55" rx="0" ry="0" width="35" height="120" />
						<rect x="240" y="15" rx="0" ry="0" width="35" height="160" />
						<rect x="280" y="135" rx="0" ry="0" width="35" height="40" />
						<rect x="320" y="85" rx="0" ry="0" width="35" height="90" />
					</ContentLoader>
				</TitleCard>
			</>
		);
	}
	return (
		<TitleCard
			className={'TouchPointChart'}
			title="Touchpoint Overview"
			suffix={
				<div className="ViewButton" onClick={() => navigate(pathname.TOUCH_POINTS_OVERVIEW)}>
					View Details
				</div>
			}
		>
			<div className="TouchPointChart--Horizontal">
				<HorizontalBar data={data} labels={labels} />
			</div>
			<div className="TouchPointChart--Vertical">
				<VerticalBar data={data} labels={labels} />
			</div>
		</TitleCard>
	);
};

export default TouchPointChart;
