// HorizontalBar.js
import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import './HorizontalBar.scss';

const HorizontalBar = ({ data, labels }) => {
	// const splitLabel = labels ? labels?.map((label) => label.split(' ')) : labels;
	const chartData = {
		labels: labels,
		datasets: [
			{
				backgroundColor: '#759DE6',
				borderWidth: 1,
				data: data,
				borderRadius: 20,
				barPercentage: 0.8,
			},
		],
	};

	const options = {
		indexAxis: 'y',
		radius: 0,
		scales: {
			y: {
				ticks: {
					padding: 40,
					callback: function (value, index, ticks) {
						return;
					},
					// autoSkip: true,
				},
				grid: {
					display: true,
					color: '#F0F0F0',
				},
				// border: { dash: [30, 0] },
				beginAtZero: true,
			},
			x: {
				ticks: {
					padding: 10,
					autoSkip: true,
				},
				grid: {
					display: true,
				},
			},
		},

		responsive: true,
		plugins: {
			tooltip: {
				enabled: true,
			},
			legend: {
				display: false,
			},
			datalabels: {
				padding: 10,
				anchor: 'start',
				offset: 0,
				align: 'end',

				formatter: function (value, context) {
					return context.chart.data.labels[context.dataIndex];
				},
				color: '#000',
			},

			labels: {
				render: ({ label, value }) => {
					return '$' + value;
				},
			},
		},
		maintainAspectRatio: false,
	};

	return (
		<div className="HorizontalBarContainer">
			<div className="HorizontalBar">
				<Bar data={chartData} options={options} />
			</div>
		</div>
	);
};

export default HorizontalBar;
