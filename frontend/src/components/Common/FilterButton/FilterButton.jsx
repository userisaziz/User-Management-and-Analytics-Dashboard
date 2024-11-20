import React, { useState } from 'react';
import './FilterButton.scss';
import { CheckIcon } from '../../../assets/icon';

export default function FilterButton({ text, onClick, id }) {
	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		onClick(id);
		setIsActive(!isActive);
	};

	return (
		<button
			id={id}
			value={text}
			className={isActive ? 'FilterButton FilterButton--Active' : 'FilterButton'}
			onClick={handleClick}
		>
			{isActive && <CheckIcon />}
			{text}
		</button>
	);
}
