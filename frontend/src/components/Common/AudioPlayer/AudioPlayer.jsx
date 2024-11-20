import React, { useState } from 'react';

import Wavesurfer from 'react-wavesurfer';

export default function MyWaveform() {
	const [playing, setPlaying] = useState(false);
	const [pos, setPos] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const handleTogglePlay = () => {
		setPlaying(!playing);
	};

	const handlePosChange = (e) => {
		setPos(e.originalArgs[0]);
		setCurrentTime(e.wavesurfer.getCurrentTime());
	};

	const handleSkipBackward = () => {
		const newPosition = Math.max(0, pos - 10); // Ensure the new position doesn't go below 0
		setPos(newPosition);
	};

	const handleSkipForward = () => {
		const newPosition = Math.min(waveDuration, pos + 10); // Ensure the new position doesn't exceed the audio duration
		setPos(newPosition);
	};

	const waveOptions = {
		barGap: 15,
		// scrollParent: false,
		// fillParent: true,
		height: 200,
		progressColor: '#0056CF', // $primary
		waveColor: '#C1CDD6', // $text_lt_lighter
		normalize: true,
		barWidth: 3,
		barRadius: 3,
	};

	const waveDuration = 205; // This should be replaced with the actual duration of your audio file

	return (
		<div>
			<Wavesurfer
				audioFile="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
				pos={pos}
				onPosChange={handlePosChange}
				playing={playing}
				options={waveOptions}
			/>

			<div style={{ textAlign: 'center' }}>
				<span>{currentTime.toFixed(2)}s</span>
			</div>

			<div style={{ textAlign: 'center' }}>
				<button onClick={handleSkipBackward}>Click</button>
			</div>
		</div>
	);
}
