import React, { useRef } from 'react';
import './OTPInput.scss';
import Cancel from '../../../assets/icon/Cancel/Cancel';

const OTPInput = ({ length = 6, onInput, className = '', InputClassName, isError, errorMessage }) => {
	const inputs = Array.from({ length }, () => useRef(null));

	const handleInput = (index, value) => {
		const newValue = value.replace(/\D/g, '').slice(0, 1);
		if (newValue && inputs[index + 1]) {
			inputs[index + 1].current.focus();
		} else if (!newValue && inputs[index - 1]) {
			inputs[index - 1].current.focus();
		}

		inputs[index].current.value = newValue;

		if (onInput) {
			onInput(index, newValue);
		}
	};

	const handlePaste = (e) => {
		e.preventDefault();
		const pasteData = e.clipboardData.getData('text/plain').slice(0, length);
		pasteData.split('').forEach((char, index) => {
			if (inputs[index] && char) {
				inputs[index].current.value = char;
				if (inputs[index + 1]) {
					inputs[index + 1].current.focus();
				}
				if (onInput) {
					onInput(index, char);
				}
			}
		});
	};

	const handleKeyDown = (index, e) => {
		if (e.key === 'Backspace' && index > 0 && !inputs[index].current.value) {
			inputs[index - 1].current.focus();
		}
	};

	return (
		<div className={`OTPInput ${className}`}>
			<div className="OTPInput--Container">
				{[...Array(length)].map((_, index) => (
					<input
						key={index}
						ref={inputs[index]}
						type="number"
						maxLength={1}
						onChange={(e) => handleInput(index, e.target.value)}
						onPaste={handlePaste}
						onKeyDown={(e) => handleKeyDown(index, e)}
						className={`OTPInput--Input ${InputClassName}`}
					/>
				))}
			</div>
			{isError && (
				<div className="OTPInput--ErrorMsgContainer">
					<div className="OTPInput--CancelIcon">
						<Cancel />
						<span className="OTPInput--ErrorMsg">{errorMessage}</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default OTPInput;
