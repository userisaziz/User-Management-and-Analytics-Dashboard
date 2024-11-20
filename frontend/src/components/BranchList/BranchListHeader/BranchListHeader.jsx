import React, { useMemo, useState } from 'react';
import { Button, ReactDropdown, Typography } from '../../Common';
import './BranchListHeader.scss';
import { toast } from 'sonner';
import { Show, isBrandManager } from '../../../utils';
const BranchListHeader = ({ selectedState, selectedCity, onStateChange, onCityChange, branchStates }) => {
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
	//reset
	const [resetSelectKey, setResetSelectKey] = useState(0);
	const [resetSelectKey2, setResetSelectKey2] = useState(0);

	return (
		<div className="SalesAnalyticsHeader">
			<div className="SalesAnalyticsHeader--HeaderLeft">
				<Typography variant="span" className="SalesAnalyticsHeader--HeaderText">
					All Branch List
				</Typography>

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
							// disabled={true}
							// options={[{ label: 'Select State First', value: null }]}
							onFocus={({ value }) => {
								toast.info('Select State First');
							}}
							// value={selectedCity}
							placeholder={'Select City'}
							className="SalesAnalytics--Dropdown"
							disabled={!selectedState}
							key={resetSelectKey}
						/>
					</Show.When>
				</Show.When>
			</div>
		</div>
	);
};

export default BranchListHeader;
