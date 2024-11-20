const FormateIsoToIst = (inputDateString, isSupressTime = true) => {
	let time = {};

	if (!isSupressTime) {
		time = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: true,
		};
	}

	if (!inputDateString) {
		return '';
	}

	const date = new Date(inputDateString);

	const formattedDate = date.toLocaleString('en-IN', {
		year: 'numeric',
		month: 'numeric',
		day: '2-digit',
		timeZone: 'Asia/Kolkata',
		...time,
	});

	return formattedDate.replaceAll('/', '-');
};

export default FormateIsoToIst;
