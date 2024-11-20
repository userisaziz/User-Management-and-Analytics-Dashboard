import React from 'react';
import { format } from 'date-fns';
const DateCellRenderer = ({ data }) => {
	console.log('data: ', data);
	const originalDate = new Date(data?.joining_date);
	const formattedDate = format(originalDate, 'yyyy-MM-dd');

	return <div>{formattedDate}</div>;
};

export default DateCellRenderer;
