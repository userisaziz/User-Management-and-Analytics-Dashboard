import { pathname } from '../../router/pathname';

const isActiveRoute = (parentRoute, childRoute) => {
	if (parentRoute === pathname.SALES_ANALYTICS) {
		return false;
	}

	const parentSegments = parentRoute.split('/').filter((segment) => segment !== '');
	const childSegments = childRoute.split('/').filter((segment) => segment !== '');

	if (parentSegments.length > childSegments.length) {
		return false;
	}

	for (let i = 0; i < parentSegments.length; i++) {
		if (parentSegments[i] !== childSegments[i]) {
			return false;
		}
	}

	return true;
};

export default isActiveRoute;
