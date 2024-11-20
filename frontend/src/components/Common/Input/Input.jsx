import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import './Input.scss';
import { InvalidIcon } from '../../../assets/icon';

const Input = React.forwardRef((props, ref) => {
	const {
		className,
		inputClassName,
		errorMessage = 'Try again with a valid email or mobile number.',
		icon,
		id,
		isReadOnly,
		isRequired,
		isError,
		onBlur,
		onChange,
		placeholder,
		type,
		value,
		isDisabled,
		onFocus,
		onClick,
		label = 'Name',
		...rest
	} = props;

	const [focused, setFocused] = useState('');

	const disabledClassName = isDisabled ? 'Input--Disabled' : '';

	const customClassName = `Input ${className} `;
	const inputFieldErrorHandle = isError ? `Input--InputField Input--Error` : 'Input--InputField';
	const inputFocusHandle = focused ? `Input--InputField Input--Focus` : 'Input--InputField';
	const customInputClassName = `${inputFieldErrorHandle} ${disabledClassName} ${inputFocusHandle} ${inputClassName}`;

	const handleBlur = () => {
		onBlur;
		setFocused(false);
	};

	const handleFocus = () => {
		setFocused(true);
		onFocus;
	};

	return (
		<div className={customClassName}>
			<Typography variant="span" className="Input--Label">
				{label}
			</Typography>
			<div className={customInputClassName}>
				<input
					{...rest}
					ref={ref}
					className="Input--InputBox"
					id={id}
					type={type}
					onChange={onChange}
					onBlur={handleBlur}
					required={isRequired}
					value={value}
					placeholder={placeholder}
					readOnly={isReadOnly}
					title=""
					onFocus={handleFocus}
					draggable={false}
					disabled={isDisabled}
					autoComplete="off"
					onClick={onClick}
				/>
				{/* <p className="Input--Placeholder">{placeHolderValue}</p> */}

				{icon && <div className="Input--Icon">{icon}</div>}
			</div>
			{isError && (
				<div className="Input--ErrorContainer">
					<InvalidIcon />
					<Typography variant="span" className="Input--ErrorMessage">
						{errorMessage}
					</Typography>
				</div>
			)}
		</div>
	);
});

export default Input;
