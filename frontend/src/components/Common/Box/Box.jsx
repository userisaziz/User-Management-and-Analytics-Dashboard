import React from 'react';
import './Box.scss';
const Box = (props) => {
	const { children, className } = props;

	const customClassName = `Box ${className}`;

	return <section className={customClassName}>{children}</section>;
};

export default Box;
