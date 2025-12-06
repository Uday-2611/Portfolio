import React from 'react'
import Image from 'next/image'

interface EducationProps {
  institution: string;
  degree: string;
  duration: string;
  image?: string;
}

const Education: React.FC<EducationProps> = ({ institution, degree, duration, image, }) => {
  return (
    <div className='w-full py-8 border-b border-[var(--white)]/20 last:border-b-0'>
      <div className='flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2'>
        <div className='flex items-center gap-4'>
          {image && (
            <div className='w-10 h-10 relative rounded-full overflow-hidden'>
              <Image src={image} alt={`${institution} logo`} fill className='object-cover' />
            </div>
          )}
          <h3 className='text-2xl md:text-3xl font-["Archia"] uppercase'>{institution}</h3>
        </div>
        <span className='font-["AeonikLight"] text-lg md:text-xl text-[var(--white)]/60'>{duration}</span>
      </div>
      <p className='text-lg md:text-xl font-["AeonikLight"] text-[var(--white)]/80 pl-14'>{degree}</p>
    </div>
  )
}

export default Education