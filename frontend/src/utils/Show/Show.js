import React, { Children } from 'react';

const Show = ({ children }) => {
	let when = null;
	let otherwise = null;

	Children.forEach(children, (child) => {
		if (child.props.isTrue === undefined) {
			otherwise = child;
		} else if (!when && child.props.isTrue === true) {
			when = child;
		}
	});

	return when || otherwise;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);
Show.Else = ({ render, children }) => render || children;

export default Show;
