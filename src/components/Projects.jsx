import { projects } from '../constants';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const Works = () => {

	return (
		<main id='projects'>
			<section>
				<div className='max-w-7xl mx-auto relative z-0 '>
					<SectionHeader subText='My work' headText='Projects.' />
					<div className='w-full flex'>
						<p className='mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]'>
							The following projects showcases my skills and experience through
							real-world examples of my work. Each project is briefly described
							with links to live demos. This reflects my abilities to solve complex problems, work with different
							technologies, and manage projects effectively.
						</p>
					</div>
				</div>
				<div className='mt-20 flex flex-col flex-wrap justify-center gap-20'>
					{projects.slice(0, 3).map((project, index) => (
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					))}
				</div>
			</section>
		</main>
	);
};

export default Works;
