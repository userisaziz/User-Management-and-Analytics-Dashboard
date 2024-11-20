import React from 'react';
import './Modal.scss';
import Typography from '../Typography/Typography';
import { Cross } from '../../../assets/icon';

const Modal = (props) => {
	const { className, contentClassName, isOpen, onClose, children, title } = props;

	const customizeClassName = `Modal ${className}`;
	const customizeContentClassName = `Modal--Content ${contentClassName}`;

	const handleModalClose = () => onClose(false);
	return (
		<React.Fragment>
			{isOpen && (
				<div className={customizeClassName}>
					<div className="Modal--Backdrop" onClick={handleModalClose}></div>
					<div className={customizeContentClassName}>
						{/* <Typography className="Modal--Title">{title}</Typography> */}
						<div className="Modal--CloseIcon" onClick={handleModalClose}>
							<Cross />
						</div>
						{/* <hr className="Modal--Divider" /> */}
						{children && <div className="Modal--Body">{children}</div>}
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Modal;
