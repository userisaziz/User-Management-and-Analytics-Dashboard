import React, { useState } from 'react';
import Typography from '../Typography/Typography';
import './Notifications.scss';
import { NotificationBell, NotificationStatus } from '../../../assets/icon';
import Divider from '../Divider/Divider';

const Notification = (props) => {
	const { className } = props;
	const customizeClassName = `${className} Notifications`;
	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
	const handleNotification = () => setIsNotificationOpen(false);

	const fetchedNotification = [
		{
			firstName: 'Siddhant',
			lastName: 'bhoi',
			id: 1,
			message: 'Raised a query',
			createdAt: '2h ago',
			isRead: false,
		},
		{
			firstName: 'Siddhant',
			lastName: 'bhoi',
			id: 2,
			message: 'Raised a query',
			createdAt: '2h ago',
			isRead: true,
		},
		{
			firstName: 'Siddhant',
			lastName: 'bhoi',
			id: 2,
			message: 'Raised a query',
			createdAt: '2h ago',
			isRead: true,
		},
		{
			firstName: 'Siddhant',
			lastName: 'bhoi',
			id: 2,
			message: 'Raised a query',
			createdAt: '2h ago',
			isRead: true,
		},
	];

	return (
		<React.Fragment>
			{
				<div className="Notifications--Icon">
					<div
						className="Notifications--NotificationContainer"
						onClick={() => {
							setIsNotificationOpen(true);
						}}
					>
						<NotificationBell />
					</div>
				</div>
			}
			{isNotificationOpen && (
				<React.Fragment>
					<div className="Notifications--BackDrop" onClick={handleNotification}></div>
					<section className={customizeClassName}>
						<section className="Notifications--NotificationHeader">
							<Typography className="Notifications--NotificationText">Notifications</Typography>
							<Typography className="Notifications--MarkReadText">Mark all as read</Typography>
						</section>

						<section className="Notifications--NotificationData">
							{fetchedNotification &&
								fetchedNotification?.map((items) => (
									<section
										className={
											!items?.isRead
												? 'Notifications--NotificationDataMiniUnread'
												: 'Notifications--NotificationDataMini'
										}
										key={items?.id}
									>
										<div className="Notifications--NotificationsContainer">
											<div className="Notifications--NotificationsRead">
												{!items?.isRead && <NotificationStatus />}
											</div>
											<div
												style={{
													width: '40px',
													height: '40px',
													borderRadius: '50%',
													objectFit: 'cover',
													overflow: 'hidden',
												}}
											>
												<img
													src="https://s3-alpha-sig.figma.com/img/7c64/47f6/28afc3a3e4930ffa09956280d7318f5c?Expires=1702252800&Signature=B9DK3N4e0GLJcoXg21BMFghiMswMy-nKizaHf0Cn8gTwPLfUEz~ZQ6NTcsG1a6VfPzBTB-ATAKSNoVBwls26pKxFXsZdSIVY4Nkq1jwEYpqWJrDSXaLgzJFeFoDDoA0-vaX2SVUbEZTHt4j3v7pTX0Ss5a2l0KEp4f5h2kjXiQSzXOwTERr-xPHwMGWHendUNcqX8GFi4D9iVYKNFErHgpQO-6kE~roROfrydjSyFXM9Y5cWP5s9LjH48tbb9WOB9F~m9BlOlwX2Cn0pbDyafqkTpkviJEtk2GC92iMYgXIVDmoVkFJeFhQnf1dO~Qoa6gmZ-yvd95mFsOcFeyQWxA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
													height={'100%'}
													width={'100%'}
												/>
											</div>
											<div className="Notifications--NotificationTextWrapper">
												<Typography className="Notifications--NotificationContent">
													<Typography
														variant="span"
														className="Notifications--NotificationName"
													>
														{items?.firstName + ' ' + items.lastName}
													</Typography>
													{' ' + items?.message}
												</Typography>
												<Typography className="Notifications--NotificationTime">
													{items?.createdAt}
												</Typography>
											</div>
										</div>
									</section>
								))}
						</section>
					</section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default Notification;
