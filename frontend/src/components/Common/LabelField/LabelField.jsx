import React from 'react';
import './LabelField.scss';
import { GenderIcon } from '../../../assets/icon';
const LabelField = ({ label = 'Email:', value = 'rohanpande@gmail.com', icon = <GenderIcon /> }) => {
	return (
		<div className="LabelField">
			<div className="LabelField--Icon">{icon}</div>

			<span className="LabelField--Label">{label}</span>

			<span className="LabelField--Value">{value}</span>
		</div>
	);
};

export default LabelField;
