import React from 'react';

const NoDataFound = () => {
	return (
		<svg width={100} height={100} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_2215_5032)">
				<rect width={100} height={100} rx={50} fill="#DDE8FF" />
				<path
					d="M74.5 20.4999L110.5 56.4999L66.1792 108.905L25.6601 79.6435L74.5 20.4999Z"
					fill="black"
					fillOpacity="0.09"
				/>
				<rect x={25} y={20} width={50} height={60} rx={2} fill="white" />
				<rect x={30} y={26} width={40} height="4.8" fill="#757575" />
				<rect x={30} y="36.8" width={40} height="4.8" fill="#757575" />
				<rect x={30} y="47.6" width={40} height="4.8" fill="#757575" />
				<rect x={30} y="58.4" width={40} height="4.8" fill="#757575" />
				<rect x={30} y="69.2" width={40} height="4.8" fill="#757575" />
				<rect x={50} y={20} width={25} height={60} fill="black" fillOpacity="0.06" />
				<g filter="url(#filter0_d_2215_5032)">
					<g clipPath="url(#clip1_2215_5032)">
						<rect x="57.5" y={40} width={26} height={26} rx={13} fill="#D65353" />
						<path
							d="M74.8327 48.6667L66.166 57.3334"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M66.166 48.6667L74.8327 57.3334"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<rect x="70.5" y={40} width={13} height={26} fill="black" fillOpacity="0.06" />
					</g>
				</g>
			</g>
			<rect x="0.5" y="0.5" width={99} height={99} rx="49.5" stroke="#EEEEEE" />
			<defs>
				<filter
					id="filter0_d_2215_5032"
					x="53.5"
					y={40}
					width={34}
					height={34}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2215_5032" />
					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2215_5032" result="shape" />
				</filter>
				<clipPath id="clip0_2215_5032">
					<rect width={100} height={100} rx={50} fill="white" />
				</clipPath>
				<clipPath id="clip1_2215_5032">
					<rect x="57.5" y={40} width={26} height={26} rx={13} fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default NoDataFound;
