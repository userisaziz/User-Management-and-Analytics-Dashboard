import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spin, Alert, Button } from 'antd';
import { fetchViewerAnalyticsData } from '../../../../../backend/services/analytics.service';

const ViewerPage = () => {
	const dispatch = useDispatch();
	const { analytics, status, error } = useSelector((state) => state.viewer);

	useEffect(() => {
		dispatch(fetchViewerAnalyticsData());
	}, [dispatch]);

	const columns = [
		{
			title: 'Metric',
			dataIndex: 'metric',
			key: 'metric',
		},
		{
			title: 'Value',
			dataIndex: 'value',
			key: 'value',
		},
	];

	const handleDownloadReport = (reportId) => {
		// Logic to download report
	};

	if (status === 'loading') {
		return <Spin tip="Loading analytics..." />;
	}

	if (status === 'failed') {
		return <Alert message="Error" description={error} type="error" showIcon />;
	}

	return (
		<div>
			<h2>Analytics</h2>
			<Table dataSource={analytics} columns={columns} rowKey="id" />
			<Button onClick={() => handleDownloadReport(1)}>Download Report</Button>
		</div>
	);
};

export default ViewerPage;
