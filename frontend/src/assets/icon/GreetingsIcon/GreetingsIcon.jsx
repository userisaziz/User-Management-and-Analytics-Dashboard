import React from 'react';

const GreetingsIcon = ({ ...props }) => {
	return (
		<>
			<svg xmlns="http://www.w3.org/2000/svg" width={31} height={30} viewBox="0 0 31 30" fill="none" {...props}>
				<g clipPath="url(#clip0_212_1916)" fill="#163877">
					<path d="M14.23.014a.68.68 0 00-.763.4l-4.624 10.85c-1.426 3.152-.11 6.924.452 8.266l-5.548 4.599a.682.682 0 00-.078.974l4.095 4.665a.682.682 0 001.067-.054l5.809-8.152a.682.682 0 00.126-.396v-.972l.01-19.512a.681.681 0 00-.546-.668zM26.916 24.6a.68.68 0 00-.244-.471l-5.549-4.6c.562-1.34 1.878-5.114.452-8.264L16.951.415a.68.68 0 00-1.308.267l.009 19.512v.973c0 .141.044.28.127.395l5.808 8.152a.681.681 0 001.067.054l4.095-4.665a.682.682 0 00.167-.504z" />
				</g>
				<defs>
					<clipPath id="clip0_212_1916">
						<path fill="#fff" transform="translate(.5)" d="M0 0H30V30H0z" />
					</clipPath>
				</defs>
			</svg>
		</>
	);
};

export default GreetingsIcon;
