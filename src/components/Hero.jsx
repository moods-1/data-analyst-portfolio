const Hero = () => {
	return (
		<div className='pt-20 bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen relative w-full max-w-[1920px] mx-auto'>
			<div className='max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start mt-20 gap-5'>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-purple' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div>
					<p className='hero-head-text'>
						Hi, I'm <span className='text-purple'>Carl</span>
					</p>
					<p className='hero-sub-text'>
						I am a data analyst with a<br className='sm:block hidden' /> passion
						for transforming data
						<br className='sm:block hidden' />
						into compelling visual experiences.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
