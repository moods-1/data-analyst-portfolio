import React from 'react'

export default function AboutCard({title, images,subtext}) {
    const imageJustification = images.length > 3 ? 'justify-start' : 'justify-center';
  
    return (
      <div className="w-full max-w-[360px] min-h-[400px] border rounded-lg p-6">
          <p className="text-2xl font-semibold text-center h-20">{title}</p>
          <div className={`flex flex-wrap ${imageJustification}`}>
          {images.map(({ img, skill, color, level }, index) => (
				<div
					key={index}
					className='relative h-[120px] w-[85px] m-[5px] skills-div'
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
            <p>{subtext}</p>
    </div>
  )
}
