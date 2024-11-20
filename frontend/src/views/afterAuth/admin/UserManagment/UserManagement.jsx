import React, { useEffect } from 'react';
import { Table, Button, Modal, Tabs, Badge, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from '../_redux/actionCreator';
import { pathname } from '../../../../router/pathname';
import { toast } from 'sonner';
import CreateUserForm from './CreateUserForm/CreateUserForm';

const UserManagement = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.admin.users);
	const status = useSelector((state) => state.admin.status);

	useEffect(() => {
		dispatch(fetchUsers({}));
	}, [dispatch]);

	const handleDelete = (id) => {
		Modal.confirm({
			title: 'Are you sure you want to delete this user?',
			content: 'This action cannot be undone.',
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk: () => {
				dispatch(
					deleteUser({
						id,
						onSuccess: () => {
							toast.success('User deleted successfully');
						},
						onError: (error) => {
							toast.error('Failed to delete user');
						},
					})
				);
			},
		});
	};

	const columns = [
		{
			title: 'Username',
			dataIndex: 'username',
			key: 'username',
		},
		{
			title: 'Role',
			dataIndex: 'role',
			key: 'role',
		},
		{
			title: 'Last Login',
			dataIndex: 'lastLogin',
			key: 'lastLogin',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (status) => {
				let color;
				switch (status) {
					case 'Active':
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
			render: (text, record) => (
				<div style={{ display: 'flex', gap: '20px' }}>
					<Link to={`${pathname.USER_MANAGEMENT}/edit/${record.userId}`}>
						<Button variant="primary">Edit</Button>
					</Link>
					<Button variant="danger" danger onClick={() => handleDelete(record.userId)}>
						Delete
					</Button>
				</div>
			),
		},
	];

	const tabItems = [
		{
			key: '1',
			label: 'User List',
			children: <Table dataSource={users} columns={columns} rowKey="id" />,
		},
		{
			key: '2',
			label: 'Create User',
			children: <CreateUserForm />,
		},
	];

	return <Tabs defaultActiveKey="1" items={tabItems} />;
};

export default UserManagement;
