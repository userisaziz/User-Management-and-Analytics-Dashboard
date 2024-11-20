import React, { useState } from 'react';
import './Toggle.scss';

const Toggle = (props) => {
	const {
		className,
		onToggle,
		defaultToggleState = false,
		isDisabled,
		suppressDefaultToggleHandler = false,
		value = false,
	} = props;

	const initialToggleValue = defaultToggleState || value ? defaultToggleState || value : false;

	const [isToggle, setIsToggle] = useState(initialToggleValue);

	const isActive = isToggle ? 'on' : 'off';

	const customClassName = `Toggle ${className} ${isActive}`;

	const handleToggle = () => {
		if (!isDisabled) {
			if (!suppressDefaultToggleHandler) {
				onToggle(!isToggle);
				setIsToggle(!isToggle);
			} else {
				onToggle();
				setIsToggle(value);
			}
		}
	};

	return (
		<div className={customClassName} onClick={handleToggle}>
			<div className="Toggle--Knob"></div>
		</div>
	);
};

export default Toggle;
