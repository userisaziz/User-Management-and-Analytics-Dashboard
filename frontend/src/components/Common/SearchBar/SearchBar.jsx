import React from 'react';
import './SearchBar.scss';
import { Search } from '../../../assets/icon';

const SearchBar = (props) => {
	const {
		className,
		id,
		onChange,
		placeholder = 'Search users',
		type = 'text',
		value,
		isDisabled,
		prefix,
		...rest
	} = props;

	return (
		<div className="SearchBar">
			<div className="SearchBar--Box">
				<Search className="SearchBar--Icon" />
			</div>
			<input
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				className={`SearchBar--Input ${className}`}
				id={id}
				type={type}
				title=""
				draggable={false}
				disabled={isDisabled}
				autoComplete="off"
				{...rest}
			/>
		</div>
	);
};

export default SearchBar;
