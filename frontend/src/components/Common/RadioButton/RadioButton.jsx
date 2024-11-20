import React from 'react';
import './RadioButton.scss';

const RadioButton = ({ option, checked, onchange, name }) => {
	return (
		<div className="RadioButtonContainer">
			<input
				type="radio"
				className={`RadioButtonContainer--RadioButton`}
				onClick={() => onchange(option)}
				name={name}
				checked={checked}
			/>
			<label className="RadioButtonContainer--Label">{option}</label>
		</div>
	);
};

export default RadioButton;
