import React, { useState } from 'react';
import './MobTable.scss';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import { ArrowDown, ArrowUp } from '../../../assets/icon';
import { Show } from '../../../utils';
import { Spin } from 'antd';

const MobTableHeader = ({ visibleHeaders }) => (
	<div className="MobTable--VisibleHead">
		{visibleHeaders.map((header, index) => (
			<Typography key={index} className="MobTable--HeaderText">
				{header.headerName}
			</Typography>
		))}
	</div>
);

const MobTableRow = ({
	item,
	visibleHeaders,
	isVisible,
	toggleVisibility,
	tableHeader,
	handleNavigate,
	buttonName,
}) => (
	<>
		<div className="MobTable--VisibleRow">
			{visibleHeaders.map((header, index) => (
				<div key={index} className="MobTable--Bold">
					{item[header.field]}
				</div>
			))}
			<div variant="link" onClick={toggleVisibility} className={'MobTable--Arrow'}>
				{isVisible ? <ArrowUp /> : <ArrowDown />}
			</div>
		</div>
		<div
			className={`MobTable--KeywordsDiv ${isVisible ? 'visible' : 'hidden'}`}
			style={{ maxHeight: isVisible ? '100vh' : '0', opacity: isVisible ? '1' : '0' }}
		>
			{tableHeader.map((field, index) => (
				<div className="MobTable--LabelField" key={index}>
					<Typography className="MobTable--Label">{field.headerName} - </Typography>
					<Typography className="MobTable--Value">{item[field.field]}</Typography>
				</div>
			))}
			<div className="MobTable--LabelFieldLast">
				<div className="MobTable--LabelFieldLeft"></div>
				<Button variant={'link'} onClick={() => handleNavigate(item)}>
					{buttonName}
				</Button>
			</div>
		</div>
	</>
);

const MobTable = ({ tableHeader, rowData, handleNavigate, buttonName, isLoading }) => {
	const [visibleRows, setVisibleRows] = useState({});

	const toggleVisibility = (index) => {
		setVisibleRows((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	const visibleHeaders = tableHeader.filter((header) => header.visible);

	return (
		<div className="MobTable">
			<MobTableHeader visibleHeaders={visibleHeaders} />
			<Show.When isTrue={isLoading}>
				<div className="Spin">
					<Spin />
				</div>
			</Show.When>
			<Show.Else>
				{rowData?.map((item, rowIndex) => (
					<MobTableRow
						key={rowIndex}
						item={item}
						visibleHeaders={visibleHeaders}
						isVisible={!!visibleRows[rowIndex]}
						toggleVisibility={() => toggleVisibility(rowIndex)}
						tableHeader={tableHeader}
						handleNavigate={handleNavigate}
						buttonName={buttonName}
					/>
				))}
			</Show.Else>
		</div>
	);
};

export default MobTable;
