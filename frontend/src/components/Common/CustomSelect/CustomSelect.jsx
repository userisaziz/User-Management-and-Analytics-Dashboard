import React, { useState, useRef, useEffect } from 'react';
import './CustomSelect.scss';
import ArrowDown from '../../../assets/icon/ArrowDown/ArrowDown';
import Cross from '../../../assets/icon/Cross/Cross';
function CustomSelect({
	options,
	placeholder,
	defaultValue,
	onSelect,
	label = 'text',
	required = false,
	handleOptionSelected,
	optionKey,
	validate,
	errorMessage,
	optionStyle = {},
	disabled = false,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const [handleError, setHandleError] = useState(false);
	const [selectedOption, setSelectedOption] = useState(defaultValue || '');
	const selectRef = useRef(null);

	const handleOptionSelect = (option) => {
		handleOptionSelected && handleOptionSelected(option);
		setSelectedOption(option[optionKey]);
		setIsOpen(false);
		onSelect && onSelect(option[optionKey]);
	};

	const handleClickOutside = (event) => {
		if (selectRef.current && !selectRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleButtonClick = () => {
		if (options?.length > 0) {
			setIsOpen(!isOpen);
		} else {
			setIsOpen(false);
			setHandleError(true);
		}
	};

	return (
		<div className={`CustomSelect ${isOpen ? 'open' : ''}`} ref={selectRef}>
			<label className="CustomSelect__label">
				{label}
				{required && <span className="CustomSelect__small__icon">*</span>}
			</label>
			<button
				className="CustomSelect__button"
				onClick={handleButtonClick}
				type="button"
				style={{ color: defaultValue ? '#333333' : ' #8c8c8c' }}
				disabled={disabled}
			>
				{defaultValue || placeholder}
				<span className="arrow">
					<ArrowDown />
				</span>
			</button>
			{isOpen && (
				<ul className="CustomSelect__options" style={optionStyle}>
					{options?.map((option) => (
						<li
							key={option.value}
							className={`CustomSelect__option ${selectedOption === option.label ? 'selected' : ''}`}
							onClick={() => handleOptionSelect(option)}
						>
							{option[optionKey]}
						</li>
					))}
				</ul>
			)}
			<div className="CustomSelect__validation">
				{!validate && errorMessage && handleError && (
					<span className="CustomSelect__validation__message">
						<Cross className="CustomSelect__validation__icon" />
						{errorMessage}
					</span>
				)}
			</div>
		</div>
	);
}

export default CustomSelect;
