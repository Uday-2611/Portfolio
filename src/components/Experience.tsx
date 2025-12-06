import React from 'react'
import Image from 'next/image'

interface ExperienceProps {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
  image?: string;
}

const Experience: React.FC<ExperienceProps> = ({ company, position, duration, responsibilities, image, }) => {
  return (
    <div className='w-full py-8 border-b border-[var(--white)]/20 last:border-b-0'>
      <div className='flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2'>
        <div className='flex items-center gap-4'>
          {image && (
            <div className='w-10 h-10 relative rounded-full overflow-hidden'>
              <Image src={image} alt={`${company} logo`} fill className='object-cover' />
            </div>
          )}
          <div>
            <h3 className='text-2xl md:text-3xl font-["Archia"] uppercase'>{company}</h3>
            <p className='text-lg md:text-xl font-["AeonikLight"] text-[var(--white)]/80'>{position}</p>
          </div>
        </div>
        <span className='font-["AeonikLight"] text-lg md:text-xl text-[var(--white)]/60'>{duration}</span>
      </div>

      <ul className='list-disc list-inside pl-4 md:pl-14 space-y-2'>
        {responsibilities.map((item, index) => (
          <li key={index} className='text-base md:text-lg font-["AeonikLight"] text-[var(--white)]/80 leading-relaxed'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Experience