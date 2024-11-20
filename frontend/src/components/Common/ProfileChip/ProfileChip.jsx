import React from 'react';
import { ArrowDown, ArrowUp } from '../../../assets/icon';
import './ProfileChip.scss';

const ProfileChip = (props) => {
	const { profileDetails, handleProfile, isProfileOpen } = props;
	return (
		<div className="Profile" onClick={handleProfile}>
			{profileDetails({
				name: 'Siddhant',
				role: 'Admin',
			})}
			{isProfileOpen ? <ArrowUp /> : <ArrowDown />}
		</div>
	);
};

export default ProfileChip;
