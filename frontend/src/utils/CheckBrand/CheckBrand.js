// roleUtils.js

export const checkBrand = () => {
	return localStorage.getItem('brand-name');
};

export const isBrandSpinny = () => {
	return checkBrand() === 'Spinny' ? true : false;
};
export const isBrandTanishq = () => {
	return checkBrand() === 'Tanishq' ? true : false;
};
export const isBrandBlueStone = () => {
	return checkBrand() === 'Bluestone' ? true : false;
};
export const isBrandLiveSpace = () => {
	return checkBrand() === 'Livespace' ? true : false;
};
export const isBrandEvoke = () => {
	return checkBrand() === 'Evoke hair health' ? true : false;
};
export const isBrandLenskart = () => {
	return checkBrand() === 'Lenskart' ? true : false;
};
