import React from 'react';
import './MarkerButton.scss';
import StartInteractionIcon from '../../../assets/icon/StartInteractionIcon/StartInteractionIcon.jsx';
import { Typography } from '../../Common';
const MarkerButton = ({ title = 'In-Store Sales', icon = <StartInteractionIcon />, onClick, Delete, subTitle }) => {
	return (
		<div className={`MarkerButton ${Delete && 'MarkerButton--Delete'}`} onClick={onClick}>
			{icon}
			<div>
				<div className="MarkerButton--Title">{title}</div>
				<div className="MarkerButton--Title">{subTitle}</div>
			</div>
		</div>
	);
};

export default MarkerButton;
