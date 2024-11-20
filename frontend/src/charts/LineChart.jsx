import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LineChartComponent = ({ data, lines, width = 300, height = 200 }) => {
	return (
		<LineChart width={width} height={height} data={data}>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="date" />
			<YAxis />
			<Tooltip />
			{lines.map((line, index) => (
				<Line key={index} type="monotone" dataKey={line.key} stroke={line.color} />
			))}
		</LineChart>
	);
};

export default LineChartComponent;
