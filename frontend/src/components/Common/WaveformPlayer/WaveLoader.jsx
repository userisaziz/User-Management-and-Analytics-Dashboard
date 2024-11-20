import React from 'react';
import './WaveLoader.scss';
import { ScaleLoader } from 'react-spinners';
const WaveLoader = () => {
	return (
		<div className="WaveLoader">
			<ScaleLoader color="#36d7b7" />;<h1>Loading Audio....</h1>
		</div>
	);
};

export default WaveLoader;
