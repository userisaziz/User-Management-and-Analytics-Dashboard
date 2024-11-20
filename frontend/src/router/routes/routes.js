import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Login } from '../../pages';
import { pathname } from '../pathname';
import { ErrorBoundary } from '../../components';
import AdminPanelLayout from '../../layouts/AdminPanelLayout/AdminPanelLayout';
import LoginLayout from '../../layouts/LoginLayout/LoginLayout';
import UserManagement from '../../views/afterAuth/admin/UserManagment/UserManagement';

import Homepage from '../../views/afterAuth/homepage/homepage';
import RoleManagment from '../../views/afterAuth/admin/RoleManagment/RoleManagment';
import EditUser from '../../views/afterAuth/admin/UserManagment/EditUser/EditUser';
import ActivityLogs from '../../views/afterAuth/admin/ActivityLogs.jsx/ActivityLogs';
import UpdaterPage from '../../views/afterAuth/updater/UpdaterPage';
import AdminContentManager from '../../views/afterAuth/admin/AdminContentManager/AdminContentManager';
import PersonalActivityBlog from '../../views/afterAuth/updater/PersonalActivityLog/PersonalActivityBlog';

const router = createBrowserRouter([
	// LOGIN
	{
		path: pathname.LOGIN,
		element: <LoginLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <Login />,
			},
		],
	},
	// ADMIN ROUTES
	{
		path: pathname.DASHBOARD,
		element: <AdminPanelLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: pathname.HOME,
				element: <Homepage />
			},
			{
				path: pathname.USER_MANAGEMENT,
				element: <UserManagement />,
			},
			{
				path: `${pathname.USER_MANAGEMENT}/edit/:id`, // Add route for editing a user
				element: <EditUser />,
			},
			{
				path: pathname.ROLE_MANAGEMENT,
				element: <RoleManagment />,
			},
			{
				path: pathname.ACTIVITY_LOGS,
				element: <ActivityLogs />
			},
			{
				path: pathname.CONTENT_UPDATE,
				element: <UpdaterPage />
			},
			{
				path: pathname.ADMIN_CONTENT_MANAGMENT,
				element: <AdminContentManager />
			}
			,
			{
				path: pathname.PERSONAL_ACTIVITY_LOG,
				element: <PersonalActivityBlog />
			}
		],
	},
	// // UPDATER ROUTES
	// {
	// 	path: pathname.CONTENT_UPDATE,
	// 	element: <AdminPanelLayout />,
	// 	errorElement: <ErrorBoundary />,
	// 	children: [
	// 		{
	// 			path: pathname.ACTIVITY_INSIGHTS,
	// 			element: <ActivityInsights />,
	// 		},
	// 		{
	// 			path: pathname.PERSONAL_ACTIVITY_LOG,
	// 			element: <PersonalActivityLog />,
	// 		},
	// 	],
	// },
	// // VIEWER ROUTES
	// {
	// 	path: pathname.ANALYTICS_REPORTS,
	// 	element: <AdminPanelLayout />,
	// 	errorElement: <ErrorBoundary />,
	// 	children: [
	// 		{
	// 			path: pathname.CUSTOMIZABLE_REPORTS,
	// 			element: <CustomizableReports />,
	// 		},
	// 		{
	// 			path: pathname.INTERACTIVE_CHARTS,
	// 			element: <InteractiveCharts />,
	// 		},
	// 	],
	// },
]);

export default router;