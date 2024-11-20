import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from '../Input/Input';
import Typography from '../Typography/Typography';

import { ArrowDown, ArrowUp } from '../../../assets/icon';

import './Dropdown.scss';

const Dropdown = (props) => {
	const {
		className,
		options,
		onSelect,
		label,
		isRequired,
		keyToRead,
		placeholder,
		prefix,
		name,
		id,
		onBlur,
		isError,
		errorMessage,
		value,
		isDisabled,
		onClick,
		isLoading,
		suffixKeyToRead,
	} = props;

	const [isOpen, setIsOpen] = useState(false);

	const [selectedValue, setSelectedValue] = useState({
		value: value,
		id: null,
	});

	const customClassName = `Dropdown ${className}`;

	const handleDropdown = () => {
		!isOpen && onClick && onClick();
		return isDisabled ? setIsOpen(false) : setIsOpen(!isOpen);
	};

	const isItemSelected = (id) => (id === selectedValue.id ? `Dropdown--Item Dropdown--Active` : `Dropdown--Item`);

	const addSuffix = (item) => {
		if (suffixKeyToRead) {
			return `(${item[suffixKeyToRead] ?? ''})`;
		} else {
			return '';
		}
	};

	const itemsInDropdown = (item) =>
		keyToRead ? `${item[keyToRead]}  ${suffixKeyToRead ? addSuffix(item) : ''} ` : item;

	const handleSelectedValue = (item, index) =>
		keyToRead
			? setSelectedValue({
					value: item[keyToRead],
					id: index,
				})
			: setSelectedValue({ value: item, id: index });

	const onItemClick = (item, index) => {
		handleSelectedValue(item, index);
		onSelect(item);
		setIsOpen(false);
	};

	const renderIcon = () =>
		isOpen ? (
			<ArrowUp onClick={handleDropdown} className="Dropdown--Icon" />
		) : (
			<ArrowDown onClick={handleDropdown} className="Dropdown--Icon" />
		);

	const DataNotFoundFallBack = () => (
		<ul className="Dropdown--Menu">
			<li className="Dropdown--Item">
				{isLoading ? (
					<Typography className="Dropdown--Text ">Loading...</Typography>
				) : (
					<Typography className="Dropdown--Text ">No Data found</Typography>
				)}
			</li>
		</ul>
	);

	useEffect(() => {
		if (value === '')
			setSelectedValue({
				value: '',
				id: null,
			});
	}, [value]);

	return (
		<div className={customClassName}>
			<Input
				// {...props}
				name={name}
				id={id}
				prefix={prefix}
				className="Dropdown--Box"
				inputClassName="Dropdown--Field"
				label={label}
				isRequired={isRequired}
				value={selectedValue.value}
				isReadOnly={true}
				icon={renderIcon()}
				onClick={handleDropdown}
				type="text"
				placeholder={placeholder}
				onBlur={onBlur}
				isError={isError}
				errorMessage={errorMessage}
				isDisabled={isDisabled}
			/>

			{isOpen && (
				<React.Fragment>
					<div className="Dropdown--BackDrop" onClick={handleDropdown}></div>
					{Array.isArray(options) && options?.length !== 0 && (
						<ul className="Dropdown--Menu" id="Menu">
							<React.Fragment>
								{options &&
									options?.map((item, index) => (
										<li
											className={isItemSelected(index)}
											key={uuidv4()}
											onClick={() => onItemClick(item, index)}
										>
											<Typography className="Dropdown--Text ">{itemsInDropdown(item)}</Typography>
										</li>
									))}
							</React.Fragment>
						</ul>
					)}

					{(!Array.isArray(options) || options.length === 0) && <DataNotFoundFallBack />}
				</React.Fragment>
			)}
		</div>
	);
};

export default Dropdown;
