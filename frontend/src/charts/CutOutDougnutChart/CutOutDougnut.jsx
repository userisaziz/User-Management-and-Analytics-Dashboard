import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './CutOutDougnut.scss';
const CutOutDougnut = ({ data, labels, options }) => {
	// Data for the chart
	const mapData = {
		labels: labels,
		datasets: [
			{
				data: data,
				backgroundColor: ['#163877', '#EC2929'],
				hoverBackgroundColor: ['#FF6384', '#36A2EB'],
				offset: 15,
			},
		],
	};
	const sliceThickness = [
		{
			id: 'sliceThickness',
			beforeDraw(chart, plugins) {
				let sliceThicknessPixel = [280, 300];
				sliceThicknessPixel.forEach((thickness, index) => {
					chart.getDatasetMeta(0).data[index].outerRadius = (chart.chartArea.width / thickness) * 100;
				});
			},
		},
	];

	return (
		<div className="CutOutDougnut">
			<Doughnut data={data} plugins={sliceThickness} options={options} />
		</div>
	);
};

export default CutOutDougnut;
