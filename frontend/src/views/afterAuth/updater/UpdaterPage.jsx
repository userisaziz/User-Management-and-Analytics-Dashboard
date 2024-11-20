import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Spin, Alert } from 'antd';
import { fetchDocuments, fetchUpdateMetrics, fetchPersonalActivityLogs } from './_redux/actionCreator';
import DocumentForm from './DocumentForm.jsx';

const UpdaterPage = () => {
	const dispatch = useDispatch();
	const { metrics, documents, status, error } = useSelector((state) => state.updater);
	console.log('documents: ', documents);

	useEffect(() => {
		dispatch(fetchDocuments());
		dispatch(fetchUpdateMetrics());
	}, [dispatch]);

	const handleModify = (id) => {
		// Logic to modify document
	};

	if (status === 'loading') {
		return <Spin tip="Loading..." />;
	}

	if (status === 'failed') {
		return <Alert message="Error" description={error} type="error" showIcon />;
	}
	const columns = [
		{
			title: 'UserId',
			dataIndex: 'userId',
			key: 'userId',
		},
		{
			title: 'timestamp',
			dataIndex: 'timestamp',
			key: 'timestamp',
		},
		{
			title: 'Action',
			dataIndex: 'action',
			key: 'action',
			// render: (text, record) => (
			// 	<Button type="link" onClick={() => handleModify(record.id)}>
			// 		Modify
			// 	</Button>
			// ),
		},
	];
	return (
		<div>
			<h2>Document Management</h2>
			<DocumentForm />
			<Table dataSource={documents} columns={columns} rowKey="id" />
			<h2>Update Metrics</h2>
			{metrics && (
				<div>
					<p>Documents Uploaded: {metrics.documentsUploaded}</p>
					<p>Success Rate: {metrics.successRate}</p>
				</div>
			)}
		</div>
	);
};

export default UpdaterPage;
