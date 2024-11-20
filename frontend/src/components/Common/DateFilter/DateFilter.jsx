import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { CalendarIcon, Cross } from '../../../assets/icon';
import './DateFilter.scss';
import Button from '../Button/Button';

import {
	addDays,
	endOfDay,
	startOfDay,
	startOfYear,
	startOfMonth,
	endOfMonth,
	endOfYear,
	addMonths,
	addYears,
	startOfWeek,
	endOfWeek,
	isSameDay,
	differenceInCalendarDays,
	format,
} from 'date-fns';

import { DateRange, DateRangePicker, defaultStaticRanges } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file css file
import { subDays } from 'date-fns';
import Divider from '../Divider/Divider';

const DateFilter = ({ onApply, onCancel, disabled }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [startDate, setStartDate] = useState();

	const [endDate, setEndDate] = useState();
	const [buttonContent, setButtonContent] = useState('All Time');

	const [isAllTime, setIsAllTime] = useState(false);
	const [state, setState] = useState([
		{
			startDate: startOfDay(new Date()),
			endDate: endOfDay(new Date()),
			key: 'selection',
		},
	]);

	const handleOpenModal = () => {
		if (!disabled) {
			setIsModalOpen(true);
		}
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleApply = () => {
		const formattedStartDate = format(state[0].startDate, 'yyyy-MM-dd');
		const formattedEndDate = format(state[0].endDate, 'yyyy-MM-dd');
		setStartDate(formattedStartDate);
		setEndDate(formattedEndDate);
		setIsModalOpen(false);
		setButtonContent(`${formattedStartDate} - ${formattedEndDate}`);
		// if (isAllTime) {
		onApply(formattedStartDate, formattedEndDate);
		// }
	};
	const handleAllTIme = () => {
		setIsAllTime(!isAllTime);
		setStartDate(null);
		setEndDate(null);
	};

	const handleCancel = () => {
		setState([
			{
				startDate: startOfDay(new Date()),
				endDate: endOfDay(new Date()),
				key: 'selection',
			},
		]);
		handleCloseModal();
	};
	const handleClear = () => {
		setButtonContent('All Time');
		setStartDate(null);
		setEndDate(null);
		onCancel();
	};
	return (
		<>
			{!startDate ? (
				<div className="DateFilter" onClick={handleOpenModal}>
					<div className="DateFilter--Content" style={{ position: 'relative', zIndex: 0 }}>
						<CalendarIcon />
						{buttonContent}
					</div>
				</div>
			) : (
				<div className="DateFilter">
					<div
						className="DateFilter--Content"
						onClick={handleOpenModal}
						style={{ position: 'relative', zIndex: 0 }}
					>
						<CalendarIcon />
						{buttonContent}
					</div>
					{!isModalOpen && buttonContent !== 'All Time' ? (
						<div onClick={handleClear}>
							<Cross />
						</div>
					) : null}
				</div>
			)}
			<Modal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				title="Modal Title"
				className="DateFilter--Modal"
				contentClassName={'DateFilter--ModalContent'}
			>
				{/* <div className="DateFilter--ModalContent"> */}
				{/* <div
						className="DateFilter--Title"
						onClick={handleAllTIme}
						style={{
							backgroundColor: isAllTime ? '#EFF2F7' : null,
							color: isAllTime ? '#3D91FF' : '#161718',
						}}
					>
						<Typography className="DateFilter--AllTime">All Time</Typography>
					</div>
					<Divider text={'or'} /> */}
				<DateRange
					onChange={(item) => {
						setIsAllTime(false);
						setState([item.selection]);
					}}
					showSelectionPreview={true}
					moveRangeOnFirstSelection={false}
					months={1}
					ranges={state}
					direction="horizontal"
					staticRanges={[
						{
							label: 'Today',
							range: () => ({
								startDate: startOfDay(new Date()),
								endDate: endOfDay(new Date()),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: startOfDay(new Date()),
									endDate: endOfDay(new Date()),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
						{
							label: 'Yesterday',
							range: () => ({
								startDate: startOfDay(subDays(new Date(), 1)),
								endDate: endOfDay(subDays(new Date(), 1)),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: startOfDay(subDays(new Date(), 1)),
									endDate: endOfDay(subDays(new Date(), 1)),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
						{
							label: 'Last 7 days',
							range: () => ({
								startDate: subDays(new Date(), 7),
								endDate: addDays(new Date(), 1),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: subDays(new Date(), 7),
									endDate: addDays(new Date(), 1),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
						{
							label: 'Last 14 days',
							range: () => ({
								startDate: subDays(new Date(), 14),
								endDate: addDays(new Date(), 1),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: subDays(new Date(), 14),
									endDate: addDays(new Date(), 1),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
						{
							label: 'Last 30 days',
							range: () => ({
								startDate: subDays(new Date(), 30),
								endDate: addDays(new Date(), 1),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: subDays(new Date(), 30),
									endDate: addDays(new Date(), 1),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
						{
							label: 'Last quarter (3 months)',
							range: () => ({
								startDate: startOfMonth(addMonths(new Date(), -3)),
								endDate: endOfMonth(addMonths(new Date(), -1)),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: startOfMonth(addMonths(new Date(), -3)),
									endDate: endOfMonth(addMonths(new Date(), -1)),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
						{
							label: 'Last year',
							range: () => ({
								startDate: startOfYear(addYears(new Date(), -1)),
								endDate: endOfYear(addYears(new Date(), -1)),
							}),
							isSelected: (range) => {
								const definedRange = {
									startDate: startOfYear(addYears(new Date(), -1)),
									endDate: endOfYear(addYears(new Date(), -1)),
								};
								return (
									isSameDay(range.startDate, definedRange.startDate) &&
									isSameDay(range.endDate, definedRange.endDate)
								);
							},
						},
					]}
				/>
				<div className="DateFilter--ButtonDiv">
					<Button variant={'Transparent'} className="DateFilter--Button" onClick={handleCancel}>
						Cancel
					</Button>
					<Button className="DateFilter--Button" onClick={handleApply}>
						Apply
					</Button>
				</div>
				{/* </div> */}
			</Modal>
		</>
	);
};

export default DateFilter;
