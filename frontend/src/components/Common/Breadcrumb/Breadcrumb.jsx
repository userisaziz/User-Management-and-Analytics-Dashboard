import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = (props) => {
	const navigate = useNavigate();
	const { items } = props;

	const handleClick = (item) => {
		// Navigate back with state when clicking on a breadcrumb item
		navigate(item.url, { state: item.state });
	};

	const breadcrumbItems = items.map((item, index) => ({
		key: index,
		title:
			index === items.length - 1 ? (
				item.text
			) : (
				<Link to={item.url} state={item.state} onClick={() => handleClick(item)}>
					{item.text}
				</Link>
			),
	}));

	return (
		<div className="Breadcrumb">
			<AntBreadcrumb items={breadcrumbItems} />
		</div>
	);
};

export default Breadcrumb;
