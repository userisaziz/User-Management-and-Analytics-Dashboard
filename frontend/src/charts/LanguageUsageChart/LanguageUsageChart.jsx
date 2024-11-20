import React from 'react';
import './SingleBarChart.scss'; // Import CSS file for styling

const SingleBarChart = ({ languagePercentages }) => {
	const totalPercentage = languagePercentages.reduce((acc, curr) => acc + curr, 0);
	const percentageStyle = languagePercentages.map((percentage, index) => ({
		width: `${(percentage / totalPercentage) * 100}%`,
		backgroundColor: `hsl(${(index * 30) % 360}, 70%, 50%)`, // Adjust color based on index
	}));

	return (
		<div className="single-bar-chart">
			{percentageStyle.map((style, index) => (
				<div className="bar" key={index} style={style}></div>
			))}
			<div className="label">{totalPercentage}%</div>
		</div>
	);
};

export default SingleBarChart;
