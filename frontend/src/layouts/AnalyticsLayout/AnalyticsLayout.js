import React from 'react';
import { useDynamicComponents } from '../../hooks';
import { AnalyticsComponents } from '../../db/AnalyticsContent/AnalyticsContent';

const AnalyticsLayout = () => {
	return <>{useDynamicComponents(AnalyticsComponents)}</>;
};

export default AnalyticsLayout;
