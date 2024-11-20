import React from 'react';
import './TextArea.scss';
import Typography from '../Typography/Typography';

const TextArea = (props) => {
	const {
		row,
		col,
		value,
		className,
		isRequired,
		isDisabled,
		errorMessage,
		isError,
		placeholder,
		onchange,
		...rest
	} = props;

	const customClassName = `TextArea ${className}`;
	const disabledClassName = isDisabled ? 'TextArea--Disabled' : '';
	const textAreaErrorHandle = isError ? `TextArea--TextareaInput TextArea--Error` : 'TextArea--TextareaInput';
	return (
		<div className={customClassName}>
			<textarea
				className={`${textAreaErrorHandle} ${disabledClassName}`}
				{...rest}
				onChange={onchange}
				rows={row}
				cols={col}
				value={value}
				disabled={isDisabled}
				placeholder={placeholder}
			/>
			{isError && <Typography className="TextArea--ErrorMessage">{errorMessage}</Typography>}
		</div>
	);
};

export default TextArea;
