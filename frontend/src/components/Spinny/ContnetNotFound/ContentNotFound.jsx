import React from 'react';
import './ContentNotFound.scss';
import { EmptyRedFlags } from '../../../assets/icon';
const ContentNotFound = ({ icon, title, subTitle }) => {
	return (
		<div className="ContentNotFound">
			{/* <EmptyRedFlags /> */}
			{icon}
			<div className="ContentNotFound--TitlesDiv">
				<div className="ContentNotFound--Title">{title}</div>
				<div className="ContentNotFound--SubTitle">{subTitle}</div>
			</div>
		</div>
	);
};

export default ContentNotFound;
