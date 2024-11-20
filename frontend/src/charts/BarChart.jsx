import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data, dataKey, title }) => (
	<div>
		<h3>{title}</h3>
		<ResponsiveContainer width="100%" height={300}>
			<BarChart data={data}>
				<XAxis dataKey="role" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey={dataKey} fill="#8884d8" />
			</BarChart>
		</ResponsiveContainer>
	</div>
);

export default BarChartComponent;
