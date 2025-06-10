import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubLink,
}) => {
  return (
    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
      <div className='flex flex-col gap-2 mb-10 sm:mb-16 md:mb-20'>
        <div className='w-full sm:w-[80vw] md:w-[60vw] lg:w-[50vw] h-[50vw] sm:h-[40vw] md:h-[30vw] lg:h-[25vw] rounded-lg overflow-hidden cursor-pointer group relative'>
          <Image 
            src={image} 
            alt={title} 
            fill 
            className='object-cover'
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
            priority
          />
        </div>
        <div className='w-full sm:w-[80vw] md:w-[60vw] lg:w-[50vw] p-4 sm:p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)] arrow-icon'>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl sm:text-2xl font-["Archia"] mb-2'>{title}</h1>
            <i className="ri-arrow-right-up-line text-lg sm:text-xl"></i>
          </div>
          <p className='text-sm sm:text-base text-[var(--white)]/90 font-["AeonikLight"]'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard 