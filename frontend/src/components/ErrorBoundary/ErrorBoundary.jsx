import React, { useState } from 'react';
import { useRouteError } from 'react-router-dom';

// import { Error } from '../../assets/images';
import { Typography, Button } from '../Common';

import './ErrorBoundary.scss';

const ErrorBoundary = () => {
	const error = useRouteError();

	const [isLoading, setIsLoading] = useState(false);

	const handleReload = () => {
		setIsLoading(true);
		window.location.reload();
	};

	const PageNotFound = () => {
		return (
			<React.Fragment>
				{/* <img src={Error} alt="error" className="ErrorBoundary--Image" /> */}
				<Typography variant="h1" align="center" size="4rem">
					<span>{error.status}: </span>
					{error.statusText} !
				</Typography>
				<Typography variant="h1" align="center" color="#FA0707">
					{error.error.message}
				</Typography>
			</React.Fragment>
		);
	};

	const UiErrorFallback = () => {
		return (
			<React.Fragment>
				{/* <img src={Error} alt="error" className="ErrorBoundary--Image" /> */}
				<Typography variant="h1" align="center" size="4rem">
					Something went wrong !
				</Typography>
				<Button variant="primary" type="button" onClick={handleReload} isLoading={isLoading}>
					Reload
				</Button>

				<Typography variant="h1" align="center" color="#FA0707">
					{error.message}
				</Typography>
			</React.Fragment>
		);
	};

	return (
		<div className="ErrorBoundary">
			<div className="ErrorBoundary--Support">{error.status ? <PageNotFound /> : <UiErrorFallback />}</div>
		</div>
	);
};

export default ErrorBoundary;
