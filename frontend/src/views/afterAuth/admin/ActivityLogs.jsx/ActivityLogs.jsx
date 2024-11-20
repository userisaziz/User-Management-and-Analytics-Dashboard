import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Spin, Alert } from 'antd';
import { fetchActivityLogs } from '../_redux/actionCreator';

const ActivityLogs = () => {
	const dispatch = useDispatch();
	const { logs, status, error } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(fetchActivityLogs());
	}, [dispatch]);

	const columns = [
		{
			title: 'User ID',
			dataIndex: 'userId',
			key: 'userId',
		},
		{
			title: 'Action',
			dataIndex: 'action',
			key: 'action',
		},
		{
			title: 'Timestamp',
			dataIndex: 'timestamp',
			key: 'timestamp',
			render: (text) => new Date(text).toLocaleString(),
		},
		{
			title: 'Details',
			dataIndex: 'details',
			key: 'details',
		},
	];

	if (status === 'loading') {
		return <Spin tip="Loading activity logs..." />;
	}

	if (status === 'failed') {
		return <Alert message="Error" description={error} type="error" showIcon />;
	}

	return <Table dataSource={logs} columns={columns} rowKey="activityId" />;
};

export default ActivityLogs;
