import React from 'react';
import './Button.scss';
import { ArrowRight, PreLoader } from '../../../assets/icon';
import { CapitalizeFirstLetter } from '../../../utils';

const Button = (props) => {
	const {
		children,
		onClick,
		className,
		variant = 'primary',
		isDisabled,
		isLoading,
		icon,
		type,
		suffix,
		iconRight,
	} = props;

	const variantClassName = variant ? `Button--${CapitalizeFirstLetter(variant)}` : null; // variant = primary or secondary;

	const disabledClassName = isDisabled || isLoading ? `Button--Disabled${CapitalizeFirstLetter(variant)}` : null;
	const isButtonDisabled = isDisabled || isLoading;

	const customClassName = `Button ${className} ${disabledClassName} ${variantClassName}  `;

	const linkArrowClassName = isDisabled || isLoading ? '#979797' : '#FF6B6B';

	return (
		<button className={customClassName} onClick={onClick} disabled={isButtonDisabled} type={type}>
			{isLoading && (
				<div className="Button--Loader">
					<PreLoader strokeWidth={4} />
				</div>
			)}

			{!isLoading && (
				<React.Fragment>
					{icon && <div className="Button--Icon">{icon}</div>}
					{children}
					{iconRight && <div className="Button--Icon">{iconRight}</div>}
					{suffix || CapitalizeFirstLetter(variant) === 'Link'}
				</React.Fragment>
			)}
		</button>
	);
};

export default Button;
