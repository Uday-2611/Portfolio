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
    <div className='w-[40vw] p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)]'>
      <div className='flex items-center gap-4'>
        <div className='w-[6vh] h-[6vh] relative rounded-sm flex-shrink-0 overflow-hidden'>
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
          <h3 className='text-2xl font-["Archia"]'>{institution}</h3>
          <p className='text-lg font-["AeonikLight"]'>{degree}</p>
          <p className='text-sm text-gray-400'>{duration}</p>
        </div>
      </div>
    </div>
  )
}

export default Education 