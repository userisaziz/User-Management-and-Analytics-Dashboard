function calculateSNo(page, limit, index) {
	return (page - 1) * limit + index + 1;
}
const AppendSerialNo = (data, page, limit) => {
	console.log(data, page, limit);

	return data?.map((data, i) => {
		return { ...data, s_no: calculateSNo(page, limit, i) };
	});
};

export default AppendSerialNo;
