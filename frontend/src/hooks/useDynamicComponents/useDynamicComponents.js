import React from 'react';
export const useDynamicComponents = (brandComponents) => {
	return brandComponents
		.filter(({ check }) => check())
		.map(({ component: Component }, index) => <Component key={index} />);
};

export default useDynamicComponents;
