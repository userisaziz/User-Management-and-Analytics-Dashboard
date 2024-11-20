import moment from 'moment-timezone';

const DateToIsoFormate = (date) => {
	if (!date) return null;

	// Convert in GMT+0530
	const dateInGMT = moment(date, 'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');

	// Convert to IST
	const dateInISTFormat = dateInGMT.clone().utcOffset('+0530').format('D MMM YYYY, h:mm:ss a');

	const dateInIST = moment.tz(dateInISTFormat, 'D MMM YYYY HH:mm:ss', 'Asia/Kolkata');
	const dateISTtoIsoString = dateInIST.toISOString();

	return dateISTtoIsoString;
};
export default DateToIsoFormate;
