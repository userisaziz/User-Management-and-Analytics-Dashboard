import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.scss';
import './DatePicker.scss';
import { CalendarIcon, Cross } from '../../../assets/icon';
function DatePicker({ onChange, onCancel }) {
	const [date, setDate] = useState(new Date());
	const [showCancel, setShowCancel] = useState(false);
	const [showCalendar, setShowCalendar] = useState(false);
	const [buttonContent, setButtonContent] = useState('All Time');

	const handleDateChange = (newDate) => {
		console.log('newDate: ', newDate);
		setDate(newDate);
		setShowCancel(true);
		setButtonContent(newDate.toDateString()); // Update button content with selected date
		setShowCalendar(false);
		if (onChange) {
			onChange(newDate);
		}
	};

	const toggleCalendar = () => {
		setShowCalendar(!showCalendar);
	};
	const handleCancel = () => {
		setShowCancel(false);
		setButtonContent('All Time');
		setDate(null);
		if (onCancel) {
			onCancel(null);
		}
	};
	return (
		<div style={{ position: 'relative' }} className="DatePicker">
			<div className="DatePicker--Button" onClick={toggleCalendar}>
				<CalendarIcon />
				{buttonContent}
			</div>
			{showCancel ? (
				<div onClick={handleCancel}>
					<Cross />
				</div>
			) : null}
			{showCalendar && (
				<>
					<div
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							// backgroundColor: 'rgba(0, 0, 0, 0.5)',
							zIndex: 0,
						}}
						onClick={toggleCalendar}
					></div>
					<div style={{ position: 'absolute', top: '60px', left: 0, zIndex: 2 }}>
						<Calendar onChange={handleDateChange} value={date} />
					</div>
				</>
			)}
		</div>
	);
}

export default DatePicker;
