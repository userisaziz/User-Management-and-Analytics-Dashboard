import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import DoughnutLabel from './DoughnutLabel';
import './Doughnut.scss';

const DoughnutChart = (props) => {
	const { data, className, title, text } = props;

	// const doughnutOptions = {
	//
	// 	responsive: true,
	// 	cutout: 60,
	// 	plugins: {
	// 		tooltip: {
	// 			enabled: false,
	// 		},
	// 		legend: {
	// 			display: false,
	// 		},
	// 	},
	// };
	// const option = {
	// 	maintainAspectRatio: false,

	// 	tooltip: {
	// 		trigger: 'item',
	// 	},
	// 	legend: {
	// 		top: '5%',
	// 		left: 'center',
	// 	},
	// 	plugins: {
	// 		tooltip: {
	// 			enabled: true,
	// 		},
	// 		legend: {
	// 			display: true,
	// 		},
	// 	},
	// 	series: [
	// 		{
	// 			name: 'Risk level',
	// 			type: 'pie',
	// 			radius: ['40%', '70%'],
	// 			avoidLabelOverlap: false,
	// 			label: {
	// 				show: false,
	// 				position: 'center',
	// 			},
	// 			emphasis: {
	// 				label: {
	// 					show: true,
	// 					fontSize: 40,
	// 					fontWeight: 'bold',
	// 				},
	// 			},
	// 			labelLine: {
	// 				show: false,
	// 			},
	// 			data: [
	// 				{ value: 1048, name: 'Modrate' },
	// 				{ value: 735, name: 'Minor' },
	// 			],
	// 		},
	// 	],
	// };
	return (
		// <div className="DoughnutChart">

		<div className={'DoughnutChart'}>
			<Doughnut data={data} />
		</div>
		// </div>
	);
};

export default DoughnutChart;
