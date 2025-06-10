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
    <div className='w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] p-4 sm:p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)]'>
      <div className='flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4'>
        <div className='w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh] md:w-[6vh] md:h-[6vh] relative rounded-sm flex-shrink-0 overflow-hidden'>
          {image ? (
            <Image src={image} alt={`${company} logo`} fill className='object-cover' />
          ) : (
            <div className='w-full h-full'></div>
          )}
        </div>
        <div>
          <h3 className='text-xl sm:text-2xl font-["Archia"]'>{company}</h3>
          <p className='text-base sm:text-lg font-["AeonikLight"]'>{position}</p>
          <p className='text-xs sm:text-sm text-gray-400'>{duration}</p>
        </div>
      </div>
      <ul className='list-disc list-inside pl-4 sm:pl-6'>
        {responsibilities.map((item, index) => (
          <li key={index} className='text-sm sm:text-base font-["AeonikLight"] mb-2'>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Experience 