import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import CanvasLoader from '../Loader';
import HeroExperience from './HeroExperience';
import Swipe from './Swipe';
import { RevealSlideOut } from '../Buttons';

const AboutMe = () => {
	return (
		<RevealSlideOut
			buttonText='Spread Out Plus'
			buttonClass='bg-black max-w-[160px] h-9 rounded-md !border-gray-700 mt-8 !absolute bottom-28 right-1/2 translate-x-1/2 z-10 opacity-0 animate-fade-in mx-auto'
			pseudoClass='bg-gray-800 max-w-[160px] h-full whitespace-nowrap z-10'
			leftContent='Abou'
			rightContent='t Me'
		>
			<a href='#about' className='z-0'>
				Let's Go!
			</a>
		</RevealSlideOut>
	);
};

const Hero = () => {
	const [loadComplete, setLoadComplete] = useState(false);
	const [canvasClicked, setCanvasClicked] = useState(false);
	const showSwipe = loadComplete && !canvasClicked;

	const handleProgress = (value) => {
		if (value >= 100) setLoadComplete(true);
	};

	const handleSwipe = () => setCanvasClicked(true);

	return (
		<div className='h-screen w-full relative '>
			{showSwipe ? <Swipe /> : null}
			<Canvas
				shadows
				camera={{ position: [0, 0, 8], fov: 34 }}
				onMouseDown={handleSwipe}
				onTouchStart={handleSwipe}
			>
				<color attach='background' args={['#010101']} />
				{/* <fog attach='fog' args={['#010101', 10, 30]} /> */}
				<ambientLight intensity={1} color={0xffffff} />
				<directionalLight intensity={2} position={[4, 0, 300]} />
				<Suspense fallback={<CanvasLoader handleProgress={handleProgress} />}>
					<HeroExperience />
				</Suspense>
			</Canvas>
			{loadComplete ? <AboutMe /> : null}
		</div>
	);
};

export default Hero;
