import React, { useState } from 'react';
import './Accordion.scss';
import { ArrowDown, ArrowUp } from '../../../assets/icon';
import Typography from '../Typography/Typography';

const Accordion = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="Accordion">
			{data.map((item, index) => (
				<div className="Accordion---item" key={index}>
					<button
						className={`Accordion--button ${activeIndex === index ? 'active' : ''}`}
						aria-expanded={activeIndex === index ? 'true' : 'false'}
						onClick={() => toggleAccordion(index)}
					>
						<Typography className="Accordion--title">{item.question}</Typography>
						{/* <span className="icon" aria-hidden="true"></span> */}
						{activeIndex === index ? <ArrowUp /> : <ArrowDown />}
					</button>
					<div className={`Accordion--content ${activeIndex === index ? 'open' : ''}`}>
						<Typography className="Accordion--answer">{item.answer}</Typography>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
