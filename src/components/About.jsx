import React from 'react';

import SectionHeader from './SectionHeader';
import { aboutCards } from '../constants';
import AboutCard from './AboutCard';

const About = () => {
	return (
		<main id='about'>
			<section>
				<SectionHeader subText='Introduction' headText='Overview.' />
				<a
					href='https://drive.google.com/file/d/1IAdQcGVjguChE0fRhSvrUS1SMrCW-H52/view?usp=sharing'
					rel='noopener noreferrer'
					target='_blank'
					className='action-button mt-1'
				>
					<span>CV/Resume</span>
				</a>
				<p className='mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]'>
					I'm a data analyst that also loves full stack development. Attention
					to detail and working with databases are key requirements for both.
					I'm a quick learner and collaborate closely with stakeholders/clients
					to generate solutions that solve real-world problems. Let's work
					together to bring your data to life! Tools I use to craft:
				</p>
				<div className='mt-20 flex flex-wrap gap-10 justify-center lg:justify-start'>
					{aboutCards.map((card, idx) => (
						<AboutCard {...card} key={idx} />
					))}
				</div>
			</section>
		</main>
	);
};

export default About;
