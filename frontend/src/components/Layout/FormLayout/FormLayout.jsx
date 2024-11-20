import React from 'react';
import { Box, Typography } from '../../Common';
import './FormLayout.scss';
import Logo from '../../../assets/icon/Logo/Logo';

const FormLayout = (props) => {
	const { children, className, title, subTitle } = props;
	const customClassName = `FormLayout ${className}`;
	return (
		<Box className={customClassName}>
			{/* <div className="FormLayout--Logo">
				<Logo />
			</div> */}
			<div className="FormLayout--TitleContainer">
				<Typography className="FormLayout--Title">{title}</Typography>
				<Typography className="FormLayout--SubTitle">{subTitle}</Typography>
			</div>
			{children}
		</Box>
	);
};

export default FormLayout;
