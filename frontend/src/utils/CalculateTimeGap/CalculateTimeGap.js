import React from 'react';

const CalculateTimeGap = (date) => {
	// console.log(date);
	if (!date) {
		return '';
	}

	// Parse the UTC timestamp into a Date object
	const utcDate = new Date(date);

	// Get the current local time in milliseconds
	const currentDate = new Date();

	// Calculate the time difference in milliseconds
	const timeDifferenceMs = currentDate - utcDate;

	// Convert time difference from milliseconds to hours
	const timeDifferenceMinutes = Math.floor(timeDifferenceMs / (1000 * 60));

	const handleSuffix = (data) => {
		if (data > 1) {
			return 's';
		} else {
			return '';
		}
	};

	let minutes, hours, years, months, timeDuration;

	switch (true) {
		case timeDifferenceMinutes > 525600:
			years = Math.floor(timeDifferenceMinutes / 525600);
			timeDuration = `${utcDate.toLocaleString('default', {
				month: 'short',
			})} ${utcDate.getDate()}, ${utcDate.getFullYear()}`;
			break;
		case timeDifferenceMinutes > 43200:
			months = Math.floor(timeDifferenceMinutes / 43200);
			timeDuration = `${utcDate.toLocaleString('default', {
				month: 'short',
			})} ${utcDate.getDate()}`;
			break;
		case timeDifferenceMinutes > 1440:
			const days = Math.floor(timeDifferenceMinutes / 1440);
			timeDuration = `${days} day${handleSuffix(days)} ago`;
			break;
		case timeDifferenceMinutes < 1440 && timeDifferenceMinutes > 60:
			hours = Math.floor(timeDifferenceMinutes / 60);
			timeDuration = `${hours} hr${handleSuffix(hours)} ago`;
			break;
		default:
			minutes = Math.round(timeDifferenceMinutes);
			timeDuration = `${minutes} min${handleSuffix(minutes)} ago`;
	}
	return timeDuration;
};

export default CalculateTimeGap;
