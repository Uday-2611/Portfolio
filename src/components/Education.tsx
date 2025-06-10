import React from 'react'
import Image from 'next/image'

interface EducationProps {
  institution: string;
  degree: string;
  duration: string;
  image?: string;
}

const Education: React.FC<EducationProps> = ({
  institution,
  degree,
  duration,
  image,
}) => {
  return (
    <div className='w-full sm:w-[80vw] md:w-[60vw] lg:w-[40vw] p-4 sm:p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)]'>
      <div className='flex items-center gap-3 sm:gap-4'>
        <div className='w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh] md:w-[6vh] md:h-[6vh] relative rounded-sm flex-shrink-0 overflow-hidden'>
          {image ? (
            <Image
              src={image}
              alt={`${institution} logo`}
              fill
              className='object-cover'
            />
          ) : (
            <div className='w-full h-full bg-red-500'></div>
          )}
        </div>
        <div>
          <h3 className='text-xl sm:text-2xl font-["Archia"]'>{institution}</h3>
          <p className='text-base sm:text-lg font-["AeonikLight"]'>{degree}</p>
          <p className='text-xs sm:text-sm text-gray-400'>{duration}</p>
        </div>
      </div>
    </div>
  )
}

export default Education 