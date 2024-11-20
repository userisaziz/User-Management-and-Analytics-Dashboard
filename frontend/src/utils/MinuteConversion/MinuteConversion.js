import React from 'react';

const MinuteConversion = (data = 0) => {
	const handleSuffix = (data) => {
		if (data > 1) {
			return 's';
		} else {
			return '';
		}
	};

	let minutes, hours, years, months, timeDuration;

	switch (true) {
		case data > 525600:
			years = Math.floor(data / 525600);
			timeDuration = `${utcDate.toLocaleString('default', {
				month: 'short',
			})} ${utcDate.getDate()}, ${utcDate.getFullYear()}`;
			break;
		case data > 43200:
			months = Math.floor(data / 43200);
			timeDuration = `${utcDate.toLocaleString('default', {
				month: 'short',
			})} ${utcDate.getDate()}`;
			break;
		case data > 1440:
			console.log('here 1');
			const days = Math.floor(data / 1440);
			timeDuration = `${days} day${handleSuffix(days)}`;
			break;
		case data <= 1440 && data >= 60:
			console.log('here 2');
			hours = Math.floor(data / 60);
			timeDuration = `${hours} hr${handleSuffix(hours)} `;
			break;
		default:
			console.log('here 3');
			minutes = Math.round(data);
			timeDuration = `${minutes} min${handleSuffix(minutes)} `;
	}
	console.log(timeDuration);
	return timeDuration;
};

export default MinuteConversion;
