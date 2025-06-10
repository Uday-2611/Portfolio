import React from 'react'
import Image from 'next/image'

interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  image?: string;
}

const Experience: React.FC<ExperienceProps> = ({
  company,
  position,
  duration,
  responsibilities,
  image,
}) => {
  return (
    <div className='w-[40vw] p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)]'>
      <div className='flex items-center gap-4 mb-4'>
        <div className='w-[6vh] h-[6vh] relative rounded-sm flex-shrink-0 overflow-hidden'>
          {image ? (
            <Image src={image} alt={`${company} logo`} fill className='object-cover' />
          ) : (
            <div className='w-full h-full'></div>
          )}
        </div>
        <div>
          <h3 className='text-2xl font-["Archia"]'>{company}</h3>
          <p className='text-lg font-["AeonikLight"]'>{position}</p>
          <p className='text-sm text-gray-400'>{duration}</p>
        </div>
      </div>
      <ul className='list-disc list-inside pl-6'>
        {responsibilities.map((item, index) => (
          <li key={index} className='text-base font-["AeonikLight"] mb-2'>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Experience 