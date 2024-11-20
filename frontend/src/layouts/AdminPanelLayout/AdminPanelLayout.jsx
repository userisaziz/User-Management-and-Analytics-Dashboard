import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { ErrorPrompt, Header, SideMenu, Typography } from '../../components';

import './AdminPanelLayout.scss';
import { Header, MobNavbar } from '../../components';
import { SideMenu } from '../../components/Layout';

const AdminPanelLayout = (props) => {
	const {} = props;
	const [isToggleChecked, setIsToggleChecked] = useState(true);

	const handleToggleChange = (isChecked) => {
		setIsToggleChecked(!isChecked);
	};

	// const location = useLocation();

	// const HttpServiceStore = useSelector((state) => state.httpService);

	// console.log(HttpServiceStore, 'ccomssttt');

	// const ComponentStore = useSelector((state) => state?.components);

	return (
		<div className="AdminPanel">
			<SideMenu className="AdminPanel--SideMenu" />
			<section className="AdminPanel--Right">
				<div className="AdminPanel--Header">
					<Header />
				</div>
				<div className="AdminPanel--Navbar">
					<MobNavbar onToggleChange={handleToggleChange} />
				</div>

				<section className="AdminPanel--Body" style={{ display: isToggleChecked ? 'block' : 'none' }}>
					<Outlet />
				</section>
			</section>

			<ScrollRestoration />
		</div>
	);
};

export default AdminPanelLayout;

{
	/* <ErrorPrompt
				title="Error"
				isOpen={ComponentStore.isOpenErrorPrompt}
				errorDescription={HttpServiceStore?.errorDescription}
			>
				{HttpServiceStore.errorMessage}
			</ErrorPrompt> */
}
// <>
// 		<div className="main">
// 			<div className="container">
// 				<div className="menuContainer">
// 					<SideMenu className="AdminPanel--SideMenu" />
// 				</div>
// 				<div className="contentContainer">
// 					<Header />
// 					<div className="outlet">
// 						<Outlet />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		</>
