import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const PieChartComponent = ({ data, dataKey, colors, width = 300, height = 200 }) => {
	return (
		<PieChart width={width} height={height}>
			<Pie data={data} dataKey={dataKey} cx="50%" cy="50%" outerRadius={80} label>
				{data?.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
				))}
			</Pie>
		</PieChart>
	);
};

export default PieChartComponent;
