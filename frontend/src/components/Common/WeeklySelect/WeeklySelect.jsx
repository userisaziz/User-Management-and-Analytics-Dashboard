import React, { useState } from 'react';
import './WeeklySelect.scss';
import Typography from '../Typography/Typography';

const WeeklySelect = (props) => {
	const { days, onChange, className, isError, errorMessage } = props;
	const [selectedDays, setSelectedDays] = useState([]);

	const toggleDay = (dayIndex) => {
		const updatedDays = selectedDays.includes(dayIndex)
			? selectedDays.filter((selectedDay) => selectedDay !== dayIndex)
			: [...selectedDays, dayIndex];

		setSelectedDays(updatedDays);
		onChange(updatedDays);
	};

	const errorClassName = isError ? 'WeeklySelect--Error' : '';

	return (
		<React.Fragment>
			<div className={`WeeklySelect ${className}`}>
				{days.map((day, index) => (
					<div
						key={day}
						className={
							isError
								? `${errorClassName}`
								: `WeeklySelect--Chip ${
										selectedDays.includes(index) ? 'WeeklySelect--Active' : 'WeeklySelect--Inactive'
								  }`
						}
						onClick={() => toggleDay(index)}
					>
						{day.substring(0, 3)}
					</div>
				))}
			</div>
			{isError && <Typography className="WeeklySelect--ErrorMessage">{errorMessage}</Typography>}
		</React.Fragment>
	);
};

export default WeeklySelect;
