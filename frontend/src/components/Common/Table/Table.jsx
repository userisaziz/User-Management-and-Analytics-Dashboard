import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';

import Pagination from '../Pagination/Pagination';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './Table.scss';
import { paginationLimit } from '../../../constant';

const Table = (props) => {
	const {
		row,
		header,
		isError = false,
		isLoading,
		className,
		totalItems = 0,
		isFullWidth = true,
		itemsPerPage = 0,
		totalItemsFound = 0,
		currentPageCount = 0,
		handlePageChange,
		suppressPagination = false,
		paginationLimit = 10,
	} = props;

	const gridRef = useRef(null);
	// const [goToPage, setGoToPage] = useState('');
	const [gridApi, setGridApi] = useState(null);
	// const [pageCount, setPageCount] = useState(1);

	const customClassName = `Table ${className}`;
	const errorMessage = isError ? 'Something went wrong! Please try again.' : 'No rows to show';

	const maxPageLimit = Math.ceil(totalItemsFound / itemsPerPage);

	const handleGridReady = (params) => {
		setGridApi(params.api);

		if (isFullWidth) {
			const { api } = params;
			return api.sizeColumnsToFit();
		}
	};

	const sx = {
		// marginBottom: '7rem',
	};

	const defaultColDef = useMemo(() => {
		return {
			editable: false,
			sortable: false,
			filter: false,
			wrapText: true,
			autoHeight: true,
		};
	}, []);

	const onShowLoadingOverlay = useCallback(() => {
		gridRef?.current?.api?.showLoadingOverlay();
	}, []);

	const onShowNoRowsOverlay = useCallback(() => {
		gridRef?.current?.api?.showNoRowsOverlay();
	}, []);

	// useEffect(() => {
	// 	if (goToPage) {
	// 		setPageCount(goToPage);
	// 	}
	// }, [goToPage]);

	// useEffect(() => {
	// 	if (pageCount && onPaginateChange) {
	// 		onPaginateChange({
	// 			page: Number(pageCount),
	// 			limit: Number(itemsPerPage),
	// 		});
	// 	}
	// }, [pageCount]);

	// useEffect(() => {
	// 	if (currentPageCount) {
	// 		setPageCount(currentPageCount);
	// 	}
	// }, [currentPageCount]);

	useEffect(() => {
		const isGridApiLoaded = !!gridApi;

		switch (true) {
			case isLoading && isGridApiLoaded:
				onShowLoadingOverlay();
				break;
			case isError && isGridApiLoaded:
				onShowNoRowsOverlay();
				break;
			default:
				break;
		}
	}, [gridApi, isLoading, isError]);

	return (
		<div className={customClassName} style={sx}>
			<div className="ag-theme-alpine">
				<AgGridReact
					{...props}
					ref={gridRef}
					className="AgTable"
					rowData={row}
					columnDefs={header}
					defaultColDef={defaultColDef}
					onGridReady={handleGridReady}
					paginationPageSize={paginationLimit}
					rowHeight={56}
					pagination={true}
					unSortIcon={true}
					suppressCellFocus={true}
					suppressMovableColumns={true}
					suppressPaginationPanel={true}
					suppressRowHoverHighlight={true}
					overlayLoadingTemplate={`<span className="ag-overlay-loading-center">Please wait while your rows are loading...</span>`}
					overlayNoRowsTemplate={`<span>${errorMessage}</span>`}
				/>
				{!suppressPagination && <Pagination pageCount={totalItems} onPageChange={handlePageChange} />}
			</div>
		</div>
	);
};

export default Table;
