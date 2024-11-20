import React from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { NavLink, useLocation } from 'react-router-dom';
import { Logout } from '../../../assets/icon';
import { pathname } from '../../../router/pathname';
import { Typography } from '../../Common';
import { isActiveRoute, useBrandLogo } from '../../../utils';
import './SideMenu.scss';
import { SideMenuContent } from '../../../db';

import { useDispatch } from 'react-redux';

const SideMenu = (props) => {
	const { className } = props;
	const navigateTo = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	const menu = SideMenuContent();
	const brandLogo = useBrandLogo();

	const customClassName = `SideMenu ${className}`;

	const isActiveTab = (isActive, path) => {
		if (isActive) {
			return 'SideMenu--Active';
		} else {
			return isActiveRoute(path, location.pathname) ? 'SideMenu--Active' : 'SideMenu--Inactive';
		}
	};

	const handleLogout = () => {
		localStorage.clear();

		navigateTo(pathname.LOGIN);
	};
	return (
		<aside className={customClassName}>
			<section className="SideMenu--Header">
				<div className="Icon">
					{brandLogo && <img rel="preload" src={brandLogo} className="SideMenu--Logo" alt="logo" />}
				</div>
			</section>
			<section className="SideMenu--Bottom">
				<section className="SideMenu--Body">
					{menu?.map(({ key, path, title, icon }) => {
						return (
							<NavLink
								to={path}
								className={({ isActive }) => isActiveTab(isActive, path)}
								key={key}
								draggable={false}
								end
							>
								<div className="SideMenu--Item">
									<img className="Icon" rel="preload" data-src={icon} />
									<Typography variant="h1" className="SideMenu--ItemText">
										{title}
									</Typography>
								</div>
							</NavLink>
						);
					})}
				</section>

				<section className="SideMenu--Logout">
					<div className="SideMenu--Item " onClick={handleLogout}>
						<div className="Icon">
							<Logout color="#878787" />
						</div>
						<Typography variant="h1" className="SideMenu--ItemText">
							Sign Out
						</Typography>
					</div>
				</section>
			</section>
		</aside>
	);
};

export default SideMenu;
