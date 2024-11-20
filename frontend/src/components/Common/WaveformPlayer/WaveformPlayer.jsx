import React, { useCallback, useEffect, useMemo, useState } from 'react';
import WavesurferPlayer from '@wavesurfer/react';
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js';
import HoverPlugin from 'wavesurfer.js/dist/plugins/hover.esm.js';
import { ForwardIcon, PauseIcon, PlayIcon, ReverseIcon } from '../../../assets/icon';
import WaveLoader from './WaveLoader';
import './WaveformPlayer.scss';
import Regions from 'wavesurfer.js/dist/plugins/regions.esm.js';

const WaveformPlayer = ({ 
	audioUrl, 
	height = 50, 
	isHorizontal = false, 
	showControlsBelowPlay = false, 
	regions = [] 
}) => {
	const [wavesurfer, setWavesurfer] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const regionsPlugin = useMemo(() => Regions.create(), []);

	const onReady = (ws) => {
		setWavesurfer(ws);
		setIsPlaying(false);
	};

	useEffect(() => {
		if (wavesurfer && regions?.length > 0) {
			regions.forEach((region) => {
				regionsPlugin.addRegion(region);
			});
		}
	}, [wavesurfer, regions, regionsPlugin]);

	const handleTogglePlay = () => {
		wavesurfer && wavesurfer.playPause();
	};

	const handleSkipBackward = () => {
		wavesurfer && wavesurfer.skip(-15);
	};

	const handleSkipForward = () => {
		wavesurfer && wavesurfer.skip(15);
	};

	return (
		<>
			{!wavesurfer && <WaveLoader />}
			<div className="WaveformPlayer" style={{ display: isHorizontal ? 'flex' : 'block' }}>
				{isHorizontal && wavesurfer && (
					<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
						<button className="WaveformPlayer--Play" onClick={handleTogglePlay}>
							{isPlaying ? <PauseIcon /> : <PlayIcon />}
						</button>
						
					</div>
				)}
				{showControlsBelowPlay && (
							<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<div className="WaveformPlayer--ControlsBelow">
								<button onClick={handleSkipBackward} className="WaveformPlayer--Skip">
									<ReverseIcon />
								</button>
								<button className="WaveformPlayer--Play" onClick={handleTogglePlay}>
							{isPlaying ? <PauseIcon /> : <PlayIcon />}
						</button>
								<button onClick={handleSkipForward} className="WaveformPlayer--Skip">
									<ForwardIcon />
								</button>
							</div>
							</div>
						)}
				<div style={{ display: wavesurfer ? 'block' : 'none', width: '100%' }}>
					<WavesurferPlayer
						height={height}
						barGap={2}
						progressColor="#759DE6"
						waveColor="#D7D7D7"
						normalize
						barWidth={5}
						barRadius={10}
						url={audioUrl}
						onReady={onReady}
						onPlay={() => setIsPlaying(true)}
						onPause={() => setIsPlaying(false)}
						plugins={useMemo(
							() => [Timeline.create(), HoverPlugin.create(), regionsPlugin],
							[regionsPlugin]
						)}
					/>
				</div>

				{!isHorizontal ? (
					<div className="WaveformPlayer--Controls">
						<button onClick={handleSkipBackward} className="WaveformPlayer--Skip">
							<ReverseIcon />
						</button>
						<button className="WaveformPlayer--Play" onClick={handleTogglePlay}>
							{isPlaying ? <PauseIcon /> : <PlayIcon />}
						</button>
						<button onClick={handleSkipForward} className="WaveformPlayer--Skip">
							<ForwardIcon />
						</button>
					</div>
				) : null}
			</div>
		</>
	);
};

export default WaveformPlayer;
