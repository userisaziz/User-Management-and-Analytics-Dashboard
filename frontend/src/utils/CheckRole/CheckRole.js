// roleUtils.js

export const checkRole = () => {
	return localStorage.getItem('role');
};

export const isAdmin = () => {
	return checkRole() === 'Admin' ? true : false;
};
export const isUpdater = () => {
	return checkRole() === 'Updater' ? true : false;
};
export const isViewer = () => {
	return checkRole() === 'Viewer' ? true : false;
};
export const isSED1 = () => {
	return checkRole() === 'SED1' ? true : false;
};

