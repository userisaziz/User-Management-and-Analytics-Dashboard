import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Spin, Alert, Badge } from 'antd';
import { fetchDocuments, updateDocumentStatus } from '../_redux/actionCreator';
import { TitleCard } from '../../../../components';

const AdminContentManager = () => {
	const dispatch = useDispatch();
	const { documents, status, error } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(fetchDocuments());
	}, [dispatch]);

	const handleStatusChange = (documentId, newStatus) => {
		dispatch(updateDocumentStatus({ documentId: documentId, status: newStatus }));
	};

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (status) => {
				let color;
				switch (status) {
					case 'Approved':
						color = 'green';
						break;
					case 'Rejected':
						color = 'red';
						break;
					case 'Pending':
						color = 'orange';
						break;
					default:
						color = 'blue';
				}
				return <Badge color={color} text={status} />;
			},
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) =>
				record.status !== 'Approved' && (
					<>
						<Button onClick={() => handleStatusChange(record.documentId, 'Approved')}>Approve</Button>
						<Button onClick={() => handleStatusChange(record.documentId, 'Rejected')}>Reject</Button>
						<Button onClick={() => handleStatusChange(record.documentId, 'Pending')}>Pending</Button>
					</>
				),
		},
	];

	if (status === 'loading') {
		return <Spin tip="Loading documents..." />;
	}

	if (status === 'failed') {
		return <Alert message="Error" description={error} type="error" showIcon />;
	}

	return (
		<div>
			<TitleCard title={'Content Managment'}>
				<Table dataSource={documents} columns={columns} rowKey="id" />
			</TitleCard>
		</div>
	);
};

export default AdminContentManager;
