import React, { useEffect } from 'react';
import './AdminHomepage.scss';
import { UserOutlined, ClockCircleOutlined, FileTextOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Table, Spin, Alert, Row, Col } from 'antd';

import { DashboardCard, TitleCard } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalytics } from '../_redux/actionCreator';
import { DoughnutChart, HorizontalBar, LineChart, VerticalBar } from '../../../../charts';

const AdminHomepage = () => {
	const analyticsData = useSelector((state) => state.admin.data);
	const analyticsStatus = useSelector((state) => state.admin.status);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAnalytics());
	}, [dispatch]);

	if (analyticsStatus === 'loading') {
		return <Spin tip="Loading analytics..." />;
	}

	if (analyticsStatus === 'failed') {
		return <Alert message="Error" description="Failed to load analytics data" type="error" showIcon />;
	}

	// Prepare data for charts
	const roleData = analyticsData.userRoles?.map((role) => role._count.role);
	const roleLabels = analyticsData.userRoles?.map((role) => role.role);

	const activityData = {
		labels: analyticsData.systemActivity?.map((activity) => new Date(activity.timestamp).toLocaleDateString()),
		datasets: [
			{
				label: 'Activity Count',
				data: analyticsData.systemActivity?.map((activity) => activity._count.timestamp),
				borderColor: '#8884d8',
				fill: false,
			},
		],
	};

	const documentStatusData = {
		labels: analyticsData.documentStatus?.map((status) => status.status),
		datasets: [
			{
				data: analyticsData.documentStatus?.map((status) => status._count.status),
				backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
			},
		],
	};

	return (
		<div className="AdminHomepage">
			{/* Key Metrics */}
			<div className="AdminHomepage--CardContainer">
				<DashboardCard
					icon={<UserOutlined style={{ fontSize: '24px', color: '#4caf50' }} />}
					heading={`${analyticsData.totalUsers} Total Users`}
					subheading="Total Users count"
				/>
				<DashboardCard
					icon={<ClockCircleOutlined style={{ fontSize: '24px', color: '#2196f3' }} />}
					heading={`${analyticsData.monthlyLogins} Monthly Logins`}
					subheading="Logins in the past month"
				/>
				<DashboardCard
					icon={<FileTextOutlined style={{ fontSize: '24px', color: '#ff9800' }} />}
					heading={`${analyticsData.newDocuments} New Documents`}
					subheading="Documents added this month"
				/>
				<DashboardCard
					icon={<CheckCircleOutlined style={{ fontSize: '24px', color: '#f44336' }} />}
					heading={`${analyticsData.pendingApprovals} Pending Approvals`}
					subheading="Documents awaiting review"
				/>
			</div>

			{/* Charts */}
			<Row gutter={16}>
				<Col span={24}>
					<TitleCard title="User Role Distribution">
						<VerticalBar data={roleData} labels={roleLabels} />
					</TitleCard>
				</Col>

				<Col span={16}>
					<TitleCard title="System Activity Over Time">
						<LineChart data={activityData} />
					</TitleCard>
				</Col>
			</Row>
			<TitleCard title="Document Status Breakdown">
				<DoughnutChart data={documentStatusData} />
			</TitleCard>
			{/* Activity Logs */}
			<TitleCard title={'Recent Activity logs'}>
				<Table
					dataSource={analyticsData.lastFiveActivityLogs}
					columns={[
						{ title: 'User', dataIndex: ['user', 'username'], key: 'user' },
						{ title: 'Action', dataIndex: 'action', key: 'action' },
						{ title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
					]}
					pagination={{ pageSize: 5 }}
				/>
			</TitleCard>
		</div>
	);
};

export default AdminHomepage;
