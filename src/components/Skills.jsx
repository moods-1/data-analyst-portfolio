import React from 'react';

import { skills } from '../constants';

const Skills = () => {
	return (
		<div className='flex justify-center xs:justify-start flex-wrap text-white mt-24'>
			{skills.map(({ img, skill, color, level }, index) => (
				<div
					key={index}
					className='relative h-[140px] w-[85px] m-[5px] skills-div'
				>
					<div
						className='w-[70px] h-[70px] mx-auto mt-0 mb-[5px] shadow-skill animate-pulse rounded-full cursor-pointer grid place-items-center '
						style={{ background: color }}
					>
						<img src={img} alt={`skill-${index}`} width='70%' />
					</div>
					<div className='skills-skill'>
						<p className='text-center'>{skill}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Skills;
