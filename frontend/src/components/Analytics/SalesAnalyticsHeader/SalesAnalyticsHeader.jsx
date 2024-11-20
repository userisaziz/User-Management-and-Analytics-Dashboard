import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { isBrandManager, isStoreManager, Show } from '../../../utils';
import './SalesAnalyticsHeader.scss';
import { pathname } from '../../../router/pathname';
import { Button, ReactDropdown, Typography } from '../../Common';
import { ArrowRight } from '../../../assets/icon';
import DateFilter from '../../Common/DateFilter/DateFilter';

const SalesAnalyticsHeader = ({
	storesList,
	onStoreChange,
	storeLabel,
	handleDateFilterApply,
	handleCancel,
	branchStates,
	selectedState,
	selectedCity,
	onStateChange,
	onCityChange,
	handleBranchNavigate,
	handleSalesNavigate,
}) => {
	//reset
	const [resetSelectKey, setResetSelectKey] = useState(0);
	const [resetSelectKey2, setResetSelectKey2] = useState(0);

	const options = [
		{ value: null, label: 'All Branches' },
		...(storesList || []).map((store) => ({
			value: store?.store_id || null, // Handle the case where store_id might be undefined
			label: store?.store_name || 'Unknown', // Provide a default label if store_name is undefined
		})),
	];
	// States dropdown options
	const stateOptions = useMemo(() => {
		return branchStates
			? [
					{ value: null, label: 'All States' },
					...Object.keys(branchStates).map((state) => ({ value: state, label: state })),
				]
			: [];
	}, [branchStates]);

	// City options based on selected state
	const cityOptions = selectedState
		? [
				...branchStates[selectedState]?.map((city) => ({ value: city, label: city })),
				{ value: null, label: 'All Cities' },
			]
		: [];

	return (
		<div className="SalesAnalyticsHeader">
			<div className="SalesAnalyticsHeader--HeaderLeft">
				<Typography variant="span" className="SalesAnalyticsHeader--HeaderText">
					Sales Interaction Analysis:
				</Typography>
				<DateFilter onApply={handleDateFilterApply} onCancel={handleCancel} />
				<Show.When isTrue={isBrandManager()}>
					<Typography variant="span" className="SalesAnalyticsHeader--HeaderText">
						State:
					</Typography>
					<ReactDropdown
						options={stateOptions}
						onChange={({ value }) => {
							setResetSelectKey((prevKey) => prevKey + 1);
							setResetSelectKey2((nextKey) => nextKey + 1);
							onStateChange(value);
						}}
						value={selectedState}
						placeholder={'Select State'}
						className="SalesAnalytics--Dropdown"
					/>
					<Show.When isTrue={selectedState}>
						<Typography variant="span" className="SalesAnalyticsHeader--HeaderText">
							City:
						</Typography>
						<ReactDropdown
							options={cityOptions}
							onChange={({ value }) => {
								onCityChange(value);
								setResetSelectKey2((nextKey) => nextKey + 1);
							}}
							value={selectedCity}
							placeholder={'Select City'}
							className="SalesAnalytics--Dropdown"
							disabled={!selectedState}
							key={resetSelectKey}
						/>
					</Show.When>
					<Show.When isTrue={!selectedState}>
						<Typography variant="span" className="SalesAnalyticsHeader--HeaderText">
							City:
						</Typography>
						<ReactDropdown
							options={[]}
							onFocus={({ value }) => {
								toast.info('Select State First');
							}}
							placeholder={'Select City'}
							className="SalesAnalytics--Dropdown"
							disabled={!selectedState}
							key={resetSelectKey}
						/>
					</Show.When>
					<Typography variant="span" className="SalesAnalyticsHeader--HeaderText">
						Branch:
					</Typography>
					<ReactDropdown
						options={options}
						onChange={onStoreChange}
						value={storeLabel}
						placeholder={'All Branches'}
						className="SalesAnalytics--Dropdown"
						key={resetSelectKey2}
					/>
				</Show.When>
			</div>
			<Show.When isTrue={isBrandManager()}>
				<Button iconRight={<ArrowRight />} onClick={handleBranchNavigate}>
					View Branch List
				</Button>
			</Show.When>
			<Show.When isTrue={isStoreManager()}>
				<Button iconRight={<ArrowRight />} onClick={handleSalesNavigate}>
					View SalesPersons List
				</Button>
			</Show.When>
		</div>
	);
};

export default SalesAnalyticsHeader;
