const MergeDateTimeLocal = (dateStr, timeStr, timeZone = 'Asia/Kolkata') => {
	const combinedString = `${dateStr}T${timeStr}:00.000Z`;

	return combinedString;
};

export default MergeDateTimeLocal;
