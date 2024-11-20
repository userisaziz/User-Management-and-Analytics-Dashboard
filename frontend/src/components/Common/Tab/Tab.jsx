import React from 'react';
import './Tab.scss';

const Tab = (props) => {
	const { className, active, changeActive, types } = props;

	const customClassName = `Tab ${className}`;

	return (
		<div className={customClassName}>
			{types?.map((type, index) => (
				<button
					key={index}
					className={`Tab--TabName ${active === type ? 'Tab--Active' : ''}`}
					onClick={() => changeActive(type)}
				>
					{type}
				</button>
			))}
		</div>
	);
};

export default Tab;
