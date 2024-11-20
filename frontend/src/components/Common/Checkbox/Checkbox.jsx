import React from 'react';
import './Checkbox.scss';
const Checkbox = (props) => {
	const { label, isChecked = false, onChange, id } = props;

	return (
		<div className="Checkbox">
			<input id={id} onChange={onChange} checked={isChecked} className="Checkbox--Input" type="checkbox" />
			<label className="Checkbox--Label" htmlFor={id}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
