import React from 'react';
import { Pagination as AntDPagination } from 'antd';

import './Pagination.scss';

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
	const handlePageChange = (page) => {
		onPageChange(page);
	};

	return (
		<section className="Pagination">
			<AntDPagination
				total={pageCount * 10} // Assuming each page has 10 items
				onChange={handlePageChange}
				defaultPageSize={10}
				showSizeChanger={false}
				current={currentPage}
				className="Pagination--ButtonPage"
			/>
		</section>
	);
};

export default Pagination;
