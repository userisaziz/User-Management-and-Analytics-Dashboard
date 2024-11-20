import React from 'react';

const Timer = ({ color = '#F89A12', props }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<path
				d="M10.7805 7.35692C10.3802 7.85733 9.61913 7.85733 9.21881 7.35692L7.9661 5.79104C7.44229 5.13627 7.90846 4.16634 8.74697 4.16634L11.2524 4.16634C12.0909 4.16634 12.5571 5.13627 12.0333 5.79104L10.7805 7.35692Z"
				stroke={color}
				strokeWidth="1.6"
			/>
			<path
				d="M14.733 13.533C16.2163 15.5107 14.8051 18.333 12.333 18.333L7.66634 18.333C5.19421 18.333 3.78306 15.5107 5.26634 13.533L6.56634 11.7997C7.36634 10.733 7.36634 9.26634 6.56634 8.19967L5.26634 6.46634C3.78306 4.48863 5.19421 1.66634 7.66634 1.66634L12.333 1.66634C14.8051 1.66634 16.2163 4.48863 14.733 6.46634L13.433 8.19967C12.633 9.26634 12.633 10.733 13.433 11.7997L14.733 13.533Z"
				stroke={color}
				strokeWidth="1.6"
			/>
		</svg>
	);
};

export default Timer;