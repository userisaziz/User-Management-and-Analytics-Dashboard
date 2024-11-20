import React from 'react';
import { Outlet } from 'react-router-dom';
import './LoginLayout.scss';
import LoginSwiper from '../../components/Common/LoginSwiper/LoginSwiper';
import { slides } from '../../db/LoginContent/Slides';

const LoginLayout = () => {
	return (
		<div className="LoginLayout">
			<div className="LoginLayout--Container">
				<Outlet />
			</div>
			<LoginSwiper slides={slides} />
		</div>
	);
};

export default LoginLayout;
