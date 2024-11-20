import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './LineChart.scss';

const LineChart = (props) => {
	const { data, className, verticalgrid = true, dashedBorder = true, height = '60vh', width = '100%' } = props;

	const dash = dashedBorder && { border: { dash: [15, 10] } };

	const options = {
		elements: {
			line: {
				// borderWidth: 1.5,
				// tension: 0.2,
			},
		},
		radius: 0,
		scales: {
			x: {
				ticks: {
					padding: 10,
				},
				grid: {
					tickLength: 0,
					display: verticalgrid,
					color: '#F0F0F0',
				},
			},
			y: {
				ticks: {
					padding: 10,
				},
				...dash,
				grid: {
					tickLength: 0,
					color: '#F0F0F0',
				},
			},
		},
		responsive: true,
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: {
				display: false,
			},
		},
	};
	return (
		<div style={{ height: height, width: width, color: '#fff' }}>
			<Line options={options} data={data} />
		</div>
	);
};

export default LineChart;
