// import React, { useState } from 'react';
// import Wavesurfer from 'react-wavesurfer';
// import { ForwardIcon, PauseIcon, PlayIcon, ReverseIcon } from '../../../assets/icon';
// import './ReactPlayer.scss';
// export default function MyWaveform({ audioUrl }) {
// 	const [playing, setPlaying] = useState(false);
// 	const [pos, setPos] = useState(0);
// 	const [currentTime, setCurrentTime] = useState(0);

// 	const handleTogglePlay = () => {
// 		setPlaying(!playing);
// 	};

// 	const handlePosChange = (e) => {
// 		setPos(e.originalArgs[0]);
// 		setCurrentTime(e.wavesurfer.getCurrentTime());
// 	};

// 	const handleSkipBackward = () => {
// 		const newPosition = Math.max(0, pos - 10); // Ensure the new position doesn't go below 0
// 		setPos(newPosition);
// 	};

// 	const handleSkipForward = () => {
// 		const newPosition = Math.min(waveDuration, pos + 10); // Ensure the new position doesn't exceed the audio duration
// 		setPos(newPosition);
// 	};

// 	const handleDownload = async () => {
// 		try {
// 			const response = await fetch('https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'); // Replace with your audio file URL
// 			const blob = await response.blob();
// 			const url = window.URL.createObjectURL(new Blob([blob], { type: 'audio/mp3' }));

// 			const link = document.createElement('a');
// 			link.href = url;
// 			link.setAttribute('download', 'audio.mp3');
// 			document.body.appendChild(link);
// 			link.click();
// 			link.parentNode.removeChild(link);
// 		} catch (error) {
// 			console.error('Error downloading audio:', error);
// 		}
// 	};

// 	const waveOptions = {
// 		barGap: 40,
// 		height: 100,
// 		progressColor: '#759DE6',
// 		waveColor: '#D7D7D7',
// 		normalize: true,
// 		barWidth: 5,
// 		barRadius: 10,
// 	};

// 	const waveDuration = 205; // This should be replaced with the actual duration of your audio file

// 	return (
// 		<div className="ReactPlayer">
// 			<Wavesurfer
// 				audioFile={audioUrl}
// 				pos={pos}
// 				onPosChange={handlePosChange}
// 				playing={playing}
// 				options={waveOptions}
// 			/>

// 			<div style={{ textAlign: 'center' }} className="ReactPlayer--Time">
// 				<span>{currentTime.toFixed(2)}s</span>
// 			</div>

// 			<div className="ReactPlayer--Controls">
// 				<div onClick={handleSkipBackward}>
// 					<ReverseIcon />
// 				</div>
// 				<button className="ReactPlayer--Play" onClick={handleTogglePlay}>
// 					{playing ? <PauseIcon /> : <PlayIcon />}
// 				</button>
// 				<div onClick={handleSkipForward}>
// 					<ForwardIcon />
// 				</div>
// 				{/* <button onClick={handleDownload}>Download Audio</button> */}
// 			</div>
// 		</div>
// 	);
// }
import React from 'react';

const ReactPlayer = () => {
	return <div></div>;
};

export default ReactPlayer;
