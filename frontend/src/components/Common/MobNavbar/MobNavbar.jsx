import React, { useState } from 'react';
import './MobNavbar.scss';

import { ArrowDown, Logout, UserprofileIcon } from '../../../assets/icon';
import Typography from '../Typography/Typography';
import { format } from 'date-fns';
import { SideMenuContent } from '../../../db';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { isActiveRoute, useBrandLogo } from '../../../utils';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import { pathname } from '../../../router/pathname';
import { useDispatch } from 'react-redux';

const MobNavbar = (props) => {
	const { data, onToggleChange } = props;
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const navigateTo = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const menu = SideMenuContent();

	const isActiveTab = (isActive, path) => {
		if (isActive) {
			return 'SideMenu--Active';
		} else {
			return isActiveRoute(path, location.pathname) ? 'SideMenu--Active' : 'SideMenu--Inactive';
		}
	};
	const handleProfile = () => {
		setIsProfileOpen(!isProfileOpen);
	};
	const profileDetails = (props) => {
		const { name, role } = props;
		return (
			<>
				<div className="Profiles">
					<div className="Profiles--ProfileIconContainer">
						<UserprofileIcon />
					</div>
				</div>
				<div className="Profiles--ProfileDetails">
					<Typography className="Profiles--Name">{userName}</Typography>
					<Typography className="Profiles--Role">
						{/* {storeName != 'undefined' ? storeName : 'Admin'} */}
					</Typography>
				</div>
			</>
		);
	};
	const handleLogout = () => {
		localStorage.clear();

		navigateTo(pathname.LOGIN);
	};

	const brandLogo = useBrandLogo();

	const [isChecked, setIsChecked] = useState(false); // State to track toggle

	const handleToggle = () => {
		const newValue = !isChecked;
		setIsChecked(newValue); // Toggle the state
		if (onToggleChange) {
			onToggleChange(newValue); // Invoke parent callback
		}
	};
	const formattedDate = format(new Date(), 'EEEE, dd MMMM yyyy'); // Example: "Tuesday, 19 December 2023"
	const userName = localStorage.getItem('name');

	return (
		<>
			<nav className={`menu--left ${isChecked ? 'open' : ''}`} role="navigation">
				<div className="menuToggle">
					<input type="checkbox" checked={isChecked} onChange={handleToggle} />
					<span />
					<span />
					<span />
					<ul className="menuItem">
						{menu?.map(({ key, path, title, icon }) => {
							return (
								<NavLink
									to={path}
									className={({ isActive }) => isActiveTab(isActive, path)}
									key={key}
									draggable={false}
									end
								>
									<div className="SideMenu--Item" onClick={handleToggle}>
										<div className="Icon">{icon}</div>
										<Typography variant="h1" className="SideMenu--ItemText">
											{title}
										</Typography>
									</div>
								</NavLink>
							);
						})}

						<div className="SideMenu--Item" onClick={handleLogout}>
							<Logout color="#F92125" />
							<Typography className="ProfileDropdown--signOutText">Sign Out</Typography>
						</div>
					</ul>
				</div>
				<div className="Icon">{brandLogo && <img src={brandLogo} className="MobNavbar--Logo" />}</div>
				{/* <Profile
                isProfileOpen={isProfileOpen}
                handleProfile={handleProfile}
                data={data}
                onOpenChangePasswordModal={setIsOpenChangePasswordModal}
            /> */}
				<div className="MobNavbar--ProfileIcon">
					<UserprofileIcon />
					<div className="MobNavbar--ProfileArrow" onClick={handleProfile}>
						<ArrowDown />
					</div>
					{isProfileOpen && (
						<div className="MobNavbar--ProfileDropdown">
							<ProfileDropdown
								data={data}
								handleProfile={handleProfile}
								profileDetails={profileDetails}
							/>
						</div>
					)}
				</div>
			</nav>
			<div className="MobNavbar--Titles">
				<Typography className="MobNavbar--Greeting">Hello, {userName}</Typography>
				<Typography className="MobNavbar--Date">Today is {formattedDate}</Typography>
			</div>
		</>
	);
};

export default MobNavbar;
