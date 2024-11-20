import React, { useState } from 'react';
import './ProfileDropdown.scss';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import { Key, Logout } from '../../../assets/icon';
import Divider from '../Divider/Divider';
import { pathname } from '../../../router/pathname';

export const ProfileDropdown = (props) => {
	const navigateTo = useNavigate();
	const { handleProfile, onOpenChangePasswordModal, className, data, profileDetails } = props;
	const [logoutModal, setLogoutModal] = useState(false);

	const handleLogout = () => {
		localStorage.clear();
		navigateTo(pathname.LOGIN);
		// const refreshToken = localStorage.getItem(localStorageKey.REFRESH_TOKEN);
		// const formData = {
		// 	refreshToken: refreshToken,
		// };
		// onLogout(formData);
	};

	const customizeClassName = `${className} ProfileDropdown`;

	return (
		<React.Fragment>
			<div className="ProfileDropdown--BackDrop" onClick={handleProfile}></div>
			<section className={customizeClassName}>
				<section className="ProfileDropdown--UserDetails">
					{profileDetails({
						name: 'Siddhant bhoi',
						role: 'Admin',
					})}
				</section>

				<section>
					{/* <div className="ProfileDropdown--DetailsContainer" onClick={() => onOpenChangePasswordModal(true)}>
						<Key />
						<Typography className="ProfileDropdown--changePasswordText">Change Password</Typography>
					</div> */}
					<div className="ProfileDropdown--DetailsContainer" onClick={handleLogout}>
						<Logout color="#F92125" />
						<Typography className="ProfileDropdown--signOutText">Sign Out</Typography>
					</div>
				</section>
			</section>

			<Modal
				title="Do you want to sign out?"
				isOpen={logoutModal}
				onClose={setLogoutModal}
				className="ProfileDropdown--Modal"
			>
				<div className="ProfileDropdown--Buttons">
					<Button
						variant="secondary"
						onClick={() => {
							setLogoutModal(false);
						}}
					>
						No
					</Button>
					<Button type="round" onClick={handleLogout} className="ProfileDropdown--DeleteButton">
						Yes
					</Button>
				</div>
			</Modal>
		</React.Fragment>
	);
};

export default ProfileDropdown;
