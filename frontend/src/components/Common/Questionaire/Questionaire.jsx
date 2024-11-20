import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import './Questionaire.scss';
import Modal from '../Modal/Modal';
import { Cross, ArrowDown } from '../../../assets/icon'; // Assuming you have an arrow icon
import Accordion from '../Accordion/Accordion';

const Questionaire = (props) => {
	const { data, variant } = props;
	const [openModal, setIsOpenModal] = useState(false);
	const [expandedQuestions, setExpandedQuestions] = useState([]);

	const HeaderHelper = () => {
		return (
			<div className="Questionaire--Header">
				<Typography className="Questionaire--Title">Questionnaire</Typography>
				<Cross onClick={() => setIsOpenModal(false)} className="Questionaire--Icon" />
			</div>
		);
	};

	const ContentClassName = `Questionaire--${variant}`;

	const toggleQuestion = (index) => {
		setExpandedQuestions((prev) => {
			const newExpandedQuestions = [...prev];
			newExpandedQuestions[index] = !newExpandedQuestions[index];
			return newExpandedQuestions;
		});
	};

	return (
		<div className="Questionaire">
			<div className="Questionaire--Header">
				<Typography className="Questionaire--Title">Questionnaire</Typography>
				<Button variant="Link" className="Questionaire--Button" onClick={() => setIsOpenModal(true)}>
					View More
				</Button>
			</div>
			<div className="Questionaire--Container">
				<Accordion data={data?.slice(0, 5)} />
				{!data?.length > 0 && <Typography className="Questionaire--NoData">No Data Found</Typography>}
			</div>
			<Modal onClose={() => setIsOpenModal(false)} isOpen={openModal} title={HeaderHelper()}>
				<div className="Questionaire--Container">
					<Accordion data={data} />
					{!data?.length > 0 && <Typography className="Questionaire--NoData">No Data Found</Typography>}
				</div>
			</Modal>
		</div>
	);
};

export default Questionaire;
