import { Carl } from '../assets';

const Hero = () => {
	return (
		<div className='pt-20 bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen relative w-full max-w-[1920px] mx-auto'>
			<div className='max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5'>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-purple' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>
				<div>
					<p className='hero-head-text'>
						Hi, I'm <span className='text-purple'>Carl</span>
					</p>
					<p className='hero-sub-text'>
						I am a data analyst with a<br className='sm:block hidden' /> passion for transforming data<br className='sm:block hidden' />
						into compelling visual experiences.
					</p>
				</div>
			</div>
			<div className='w-[95%] max-w-lg lg:max-w-2xl absolute translate-x-1/2 lg:translate-x-0 right-1/2 lg:right-5 top-[380px] lg:top-0 opacity-40'>
				<img
					src={Carl}
					alt='carl-pc'
					width='100%'
				/>
			</div>
		</div>
	);
};

export default Hero;
