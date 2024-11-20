import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPersonalActivityLogs } from '../_redux/actionCreator';
import { TitleCard } from '../../../../components';
import { Button, Table } from 'antd';

const PersonalActivityBlog = () => {
	const dispatch = useDispatch();
	const { logs } = useSelector((state) => state.updater);

	useEffect(() => {
		dispatch(fetchPersonalActivityLogs());
	}, []);
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
			<TitleCard title={'Activity Logs'}>
				<Table dataSource={logs} columns={columns} rowKey="id" />
			</TitleCard>
		</div>
	);
};

export default PersonalActivityBlog;
