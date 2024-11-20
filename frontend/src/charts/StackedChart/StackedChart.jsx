import React from 'react';
import { Bar } from 'react-chartjs-2';
import './StackedBarChart.scss';

const StackedBarChart = (props) => {
	const { data, className, verticalgrid = true, dashedBorder = true } = props;

	const dash = dashedBorder && { border: { dash: [15, 10] } };

	const options = {
		indexAxis: 'x',
		elements: {
			bar: {
				borderWidth: 1.5,
			},
		},
		radius: 0,
		scales: {
			x: {
				stacked: true,
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
				stacked: true,
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
				position: 'bottom',
				labels: {
					boxWidth: 8,
					boxHeight: 8,
					usePointStyle: true,
					padding: 40,
				},
			},
		},
	};

	return (
		<div className={className}>
			<Bar options={options} data={data} />
		</div>
	);
};

export default StackedBarChart;
