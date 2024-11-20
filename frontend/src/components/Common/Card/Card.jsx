import React from 'react';
import './Card.scss';

const Card = (props) => {
	const { children, className } = props;

	const customClassName = `Card ${className}`;

	return <section className={customClassName}>{children}</section>;
};

export default Card;
