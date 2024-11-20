import React from 'react';
import { pathname } from '../../router/pathname';
import { isAdmin, isUpdater, isViewer } from '../../utils/CheckRole/CheckRole';

// Constants for menu keys
const MENU_KEYS = {
	USER_MANAGEMENT: 'userManagement',
	SYSTEM_OVERVIEW: 'systemOverview',
	ACTIVITY_LOGS: 'activityLogs',
	ROLE_MANAGEMENT: 'roleManagement',
	CONTENT_UPDATE: 'contentUpdate',
	ACTIVITY_INSIGHTS: 'activityInsights',
	PERSONAL_ACTIVITY_LOG: 'personalActivityLog',
	ANALYTICS_REPORTS: 'analyticsReports',
	CUSTOMIZABLE_REPORTS: 'customizableReports',
	ADMIN_CONTENT: "adminContent",
	INTERACTIVE_CHARTS: 'interactiveCharts',
	HOME: 'home',
};

// Utility function to get role-specific menu items
const getRoleSpecificMenuItems = () => {
	if (isAdmin()) {
		return [
			{ title: 'User Management', path: pathname.USER_MANAGEMENT, key: MENU_KEYS.USER_MANAGEMENT },
			// { title: 'System Overview', path: pathname.SYSTEM_OVERVIEW, key: MENU_KEYS.SYSTEM_OVERVIEW },
			{ title: 'Activity Logs', path: pathname.ACTIVITY_LOGS, key: MENU_KEYS.ACTIVITY_LOGS },
			{ title: 'Content Management', path: pathname.ADMIN_CONTENT_MANAGMENT, key: MENU_KEYS.ADMIN_CONTENT },
		];
	} else if (isUpdater()) {
		return [
			{ title: 'Content Managment', path: pathname.CONTENT_UPDATE, key: MENU_KEYS.CONTENT_UPDATE },

			{ title: 'Personal Activity Log', path: pathname.PERSONAL_ACTIVITY_LOG, key: MENU_KEYS.PERSONAL_ACTIVITY_LOG },
		];
	} else if (isViewer()) {
		return [
			{ title: 'Analytics and Reports', path: pathname.ANALYTICS_REPORTS, key: MENU_KEYS.ANALYTICS_REPORTS },
			{ title: 'Customizable Reports', path: pathname.CUSTOMIZABLE_REPORTS, key: MENU_KEYS.CUSTOMIZABLE_REPORTS },
			{ title: 'Interactive Charts', path: pathname.INTERACTIVE_CHARTS, key: MENU_KEYS.INTERACTIVE_CHARTS },
		];
	}
	return [];
};

const SideMenuContent = () => {
	const defaultMenuItems = [
		{ title: 'Home', path: pathname.HOME, key: MENU_KEYS.HOME },
	];

	const roleSpecificMenuItems = getRoleSpecificMenuItems();
	const menuItems = [...defaultMenuItems, ...roleSpecificMenuItems];

	return menuItems;
};

export default SideMenuContent;