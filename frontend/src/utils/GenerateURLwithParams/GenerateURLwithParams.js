const GenerateURLwithParams = (baseURL, isSearch, searchVariable, isFilter, filterVariable) => {
	// console.log(
	//     'generated url  =====> ',
	//     baseURL,
	//     isSearch,
	//     searchVariable,
	//     isFilter,
	//     filterVariable
	// );

	if (isSearch && isFilter) {
		const hasSpecialCharacter = searchVariable.includes('&');
		const transformedURL = hasSpecialCharacter
			? `${baseURL}${searchVariable}&${filterVariable}`
			: `${baseURL}&${searchVariable}&${filterVariable}`;

		return transformedURL;
	}

	if (isSearch) {
		const hasSpecialCharacter = searchVariable.includes('&');
		const transformedURL = hasSpecialCharacter ? `${baseURL}${searchVariable}` : `${baseURL}?${searchVariable}`;
		return transformedURL;
	}

	if (isFilter) {
		const transformedURL = `${baseURL}&${filterVariable}`;
		return transformedURL;
	}

	return baseURL;
};

export default GenerateURLwithParams;
