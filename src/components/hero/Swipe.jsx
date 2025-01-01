import React from 'react'

import Hand from '../../assets/hand.png';

const Swipe = () => {
	return (
		<div className='absolute top-20 w-full flex justify-center opacity-0 animate-fade-in z-10'>
			<img
				src={Hand}
				alt='hand'
				width={40}
				height={40}
				className='animate-swipe w-10 h-10'
			/>
		</div>
	);
};
export default Swipe
