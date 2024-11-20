import React, { useEffect } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../../_redux/actionCreator';

const { Option } = Select;

const EditUser = () => {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();
	const user = useSelector((state) => state.admin.users.find((user) => user.id === id));

	useEffect(() => {
		if (user) {
			form.setFieldsValue(user);
		}
	}, [user, form]);

	const onFinish = (values) => {
		dispatch(updateUser({ id, ...values }));
		navigate('/user-management');
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
			<Form.Item name="role" label="Role" rules={[{ required: true, message: 'Please select a role!' }]}>
				<Select>
					<Option value="Admin">Admin</Option>
					<Option value="Viewer">Viewer</Option>
					<Option value="Updater">Updater</Option>
				</Select>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Save
				</Button>
			</Form.Item>
		</Form>
	);
};

export default EditUser;
