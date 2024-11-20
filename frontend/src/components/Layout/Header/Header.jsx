import React, { useState } from 'react';
import './Header.scss';
import { ArrowDown, ArrowUp, LogoWithBrandName, UserprofileIcon } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { Notification, Profile, ProfileChip, ProfileDropdown, Typography } from '../../Common';
import { format } from 'date-fns'; // Import format function from date-fns
import { pathname } from '../../../router/pathname';

const Header = (props) => {
	const { data } = props;
	const navigateTo = useNavigate();
	const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = useState(false);

	const [isProfileOpen, setIsProfileOpen] = useState(false);
	const [confirmModal, setConfirmModal] = useState(false);
	const handleProfile = () => {
		setIsProfileOpen(!isProfileOpen);
	};

	// Format today's date using date-fns
	const formattedDate = format(new Date(), 'EEEE, dd MMMM yyyy'); // Example: "Tuesday, 19 December 2023"
	const userName = localStorage.getItem('name');
	return (
		<header className="Header">
			<div className="Header--Left">
				<Typography className="Header--Greeting">Hello, {userName}</Typography>
				<Typography className="Header--Date">Today is {formattedDate}</Typography>
			</div>

			<div className="Header--Right">
				{/* <Notification /> */}

				<Profile
					isProfileOpen={isProfileOpen}
					handleProfile={handleProfile}
					data={data}
					onOpenChangePasswordModal={setIsOpenChangePasswordModal}
				/>
			</div>

			{/* <ChangePassword isOpen={isOpenChangePasswordModal} onClose={setIsOpenChangePasswordModal} /> */}
		</header>
	);
};

export default Header;
