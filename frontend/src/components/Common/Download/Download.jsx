import { ArrowDown, ArrowUp, DownloadIcon } from '../../../assets/icon';
import React, { useState } from 'react';
import './Download.scss';

const Download = (props) => {
	const { className, value, onchange } = props;
	const [isOpen, setIsOpen] = useState(false);
	const handleOptionClick = (option) => {
		onchange(option);
		setIsOpen(false);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const closeDropdown = () => {
		setIsOpen(false);
	};

	const options = ['Download as PDF', 'Download as Excel'];

	return (
		<div className={`DropdownContainer ${className}`}>
			<div className="DropdownContainer--DropdownHeader" onClick={toggleDropdown}>
				<DownloadIcon />
				<span className="DropdownContainer--SelectedOption">{value || 'Download Type'}</span>
				{isOpen ? <ArrowUp /> : <ArrowDown />}
			</div>
			{isOpen && (
				<>
					<div className="DropdownContainer--Overlay" onClick={closeDropdown}></div>
					<ol className="DropdownContainer--DropdownOptions">
						{Array.isArray(options) &&
							options.length &&
							options.map((e) => (
								<li key={e} className="DropdownContainer--List" onClick={() => handleOptionClick(e)}>
									{e}
								</li>
							))}
					</ol>
				</>
			)}
		</div>
	);
};

export default Download;
