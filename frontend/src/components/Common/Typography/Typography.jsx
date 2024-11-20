import React from 'react';
import { CustomizeVariant } from '../../../utils';
import './Typography.scss';
const Typography = (props) => {
	const { variant, children, className, style, type } = props;
	const Component = variant ? variant : 'p';
	const customClassName = `${className} Typography--${type}`;

	return (
		<Component className={customClassName} style={CustomizeVariant(style, { ...props })} {...props}>
			{children}
		</Component>
	);
};

export default Typography;
