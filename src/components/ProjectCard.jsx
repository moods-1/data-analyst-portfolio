import React from 'react';

export default function ProjectCard({
	name,
	description,
	tags,
	image,
	url,
}) {
	return (
		<div className='w-full sm:mr-10'>
			<div className='bg-black p-5 rounded-md w-full sm:w-[90%] mx-auto select-none border border-slate-700 hover:shadow-md hover:shadow-purple transition-all duration-500'>
				<div className='relative w-full'>
					<a href={url} target='_blank' rel='noreferrer'>
						<img
							src={image}
							alt='project_image'
							className='w-full h-full object-contain sm:object-cover rounded-md cursor-pointer'
						/>
					</a>
				</div>
				<div className='mt-5'>
					<h3 className='text-white font-bold text-[24px]'>{name}</h3>
					<p className='mt-2 text-gray-300 text-[14px]'>{description}</p>
				</div>
				<div className='flex flex-wrap gap-2 mt-5'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
