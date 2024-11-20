import React from 'react';
import './DateRangePicker.scss';
import { DateRange } from 'react-date-range';

const DateRangePicker = ({ daterange, handlechange, shadow }) => {
	return (
		<div className={`DateRangePicker ${shadow && 'DateRangePicker--Shadow'}`}>
			{/* <DateRange
				className="DateRangePicker--DateRange"
				showDateDisplay={false}
				ranges={daterange}
				onChange={handlechange}
				editableDateInputs={false}
				moveRangeOnFirstSelection={false}
				showMonthAndYearPickers={false}
				rangeColors={['#FF6B6B']}
			/> */}
		</div>
	);
};

export default DateRangePicker;
