import React from 'react';
import './Tabs.scss';

const Tabs = ({ spans, onChange, defaultvalue, style }) => {
	const handleRadioChange = (event) => {
		onChange(event.target.value);
	};

	return (
		<div className="RadioButton">
			{spans.map((span, index) => (
				<label key={index} className="RadioButton__label">
					<input
						className="RadioButton__input"
						type="radio"
						name="radioButton"
						value={span}
						onChange={handleRadioChange}
						defaultChecked={span === defaultvalue} // Add this line
					/>
					<span style={style} className="RadioButton__text">
						{span}
					</span>
				</label>
			))}
		</div>
	);
};

export default Tabs;
