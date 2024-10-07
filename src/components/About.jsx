import React from 'react';

import SectionHeader from './SectionHeader';
import Skills from './Skills';

const About = () => {
	return (
		<main id='about'>
			<section>
				<SectionHeader subText='Introduction' headText='Overview.' />
				<p className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'>
					I'm a data analyst that also loves full stack development. Attention
					to detail and working with databases are key requirements for both.
					I'm a quick learner and collaborate closely with stakeholders/clients
					to generate solutions that solve real-world problems. Let's work
					together to bring your data to life! Tools I use to craft:
				</p>
				{/* <a
				href='https://drive.google.com/file/d/1FMweVOQXkXZz1nYsNLvtqCW3XjGoBvT7/view?usp=sharing'
				rel='noopener noreferrer'
				target='_blank'
				className='bg-purple inline-block py-2 px-8 rounded-md outline-none text-white min-w-[140px] mt-8'
			>
				CV/Resume
				</a> */}
				<Skills />
			</section>
		</main>
	);
};

export default About;
