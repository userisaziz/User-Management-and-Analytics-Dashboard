import React from 'react';

const Logout = (props) => {
	const { color } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
			<path
				d="M7.41675 6.3002C7.67508 3.3002 9.21675 2.0752 12.5917 2.0752H12.7001C16.4251 2.0752 17.9167 3.56686 17.9167 7.29186V12.7252C17.9167 16.4502 16.4251 17.9419 12.7001 17.9419H12.5917C9.24175 17.9419 7.70008 16.7335 7.42508 13.7835"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.4999 10H3.0166"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.87492 7.2085L2.08325 10.0002L4.87492 12.7918"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Logout;
