// HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './HorizontalBarChart.scss';

const HorizontalBarChart = ({ data, labels }) => {
	const splitLabel = labels ? labels?.map((label) => label.split(' ')) : labels;
	const chartData = {
		labels: splitLabel,
		datasets: [
			{
				backgroundColor: '#759DE6',
				borderWidth: 1,
				data: data,
				borderRadius: 20,
				barPercentage: 0.3,
			},
		],
	};

	const options = {
		indexAxis: 'x',
		radius: 0,
		scales: {
			y: {
				ticks: {
					padding: 10,
					autoSkip: true,
				},
				grid: {
					display: true,
					color: '#F0F0F0',
				},
				border: { dash: [10, 0] },
				beginAtZero: true,
			},
			x: {
				ticks: {
					padding: 7,
					autoSkip: false,
				},
				grid: {
					display: false,
				},
			},
		},
		barPercentage: 0.3,
		responsive: true,
		plugins: {
			tooltip: {
				enabled: true,
			},
			legend: {
				display: false,
			},
		},
		maintainAspectRatio: false,
	};

	return (
		<div className="HorizontalBarChartContainer">
			<div className="HorizontalBarChart">
				<Bar data={chartData} options={options} />
			</div>
		</div>
	);
};

export default HorizontalBarChart;
