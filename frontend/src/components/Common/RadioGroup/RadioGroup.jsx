import React from 'react';
import './RadioGroup.scss';
import RadioButton from '../RadioButton/RadioButton';

const RadioGroup = ({ options, onchange, selectedvalue }) => {
	const handleRadioChange = (value) => {
		onchange(value);
	};

	return (
		<div className="RadioGroupContainer">
			{options.map((option) => (
				<RadioButton
					key={option}
					name="radio-group"
					option={option}
					checked={selectedvalue === option}
					onchange={handleRadioChange}
				/>
			))}
		</div>
	);
};

export default RadioGroup;
