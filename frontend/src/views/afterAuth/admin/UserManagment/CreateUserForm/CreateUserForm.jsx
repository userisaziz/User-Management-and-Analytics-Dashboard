import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';

import { toast } from 'sonner';
import { createUser } from '../../_redux/actionCreator';

const { Option } = Select;

const CreateUserForm = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	const onFinish = (values) => {
		dispatch(
			createUser({
				...values,
				onSuccess: () => {
					toast.success('User created successfully');
					form.resetFields();
				},
				onError: (error) => {
					toast.error('Failed to create user');
				},
			})
		);
	};

	return (
		<Form form={form} layout="vertical" onFinish={onFinish}>
			<Form.Item
				name="username"
				label="Username"
				rules={[{ required: true, message: 'Please input the username!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				name="password"
				label="Password"
				rules={[{ required: true, message: 'Please input the password!' }]}
			>
				<Input.Password />
			</Form.Item>
			<Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please select a role!' }]}>
				<Select>
					<Option value="Admin">Admin</Option>
					<Option value="Viewer">Viewer</Option>
					<Option value="Updater">Updater</Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Create User
				</Button>
			</Form.Item>
		</Form>
	);
};

export default CreateUserForm;
