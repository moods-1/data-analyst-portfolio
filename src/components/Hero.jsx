import { Carl } from '../assets';

const Hero = () => {
	return (
		<div className='flex items-center pt-20 bg-hero-pattern bg-cover bg-no-repeat bg-center h-screen relative w-full max-w-[1920px] mx-auto'>
			<div className='max-w-7xl w-full flex justify-center flex-col sm:flex-row gap-10 flex-wrap relative mx-auto -mt-28'>
				<div className='flex-1 mx-auto sm:px-16 px-6 flex items-center justify-end gap-5'>
					<div className='w-full max-w-lg'>
						<p className='hero-head-text'>
							Hi, I'm <span className='text-purple'>Carl</span>
						</p>
						<p className='hero-sub-text'>
							I am a data analyst with a passion for transforming data into
							compelling visual experiences.
						</p>
					</div>
				</div>
				<div className='flex-1 flex justify-center items-center p-5'>
					<div className='rounded-full flex justify-center w-auto h-auto p-2 overflow-hidden bg-gradient-to-br from-purple to-black'>
						<div className='overflow-hidden flex items-center justify-center bg-black bg-opacity-70 rounded-full'>
							<img src={Carl} alt='carl' className='w-[100%] max-w-[288px]' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
