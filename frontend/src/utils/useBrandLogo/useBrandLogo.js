function getItemFromLocalStorage(key) {
	return localStorage.getItem(key);
}

export function useBrandLogo() {
	return getItemFromLocalStorage('brand-logo');
}
