import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { uploadDocument } from './_redux/actionCreator';

const DocumentForm = () => {
	const dispatch = useDispatch();
	const [form] = Form.useForm();

	const onFinish = (values) => {
		dispatch(uploadDocument(values));
		form.resetFields();
	};

	return (
		<Form form={form} layout="vertical" onFinish={onFinish}>
			<Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please input the title!' }]}>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Upload Document
				</Button>
			</Form.Item>
		</Form>
	);
};

export default DocumentForm;
