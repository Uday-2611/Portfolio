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
      <div className='flex flex-col gap-2 mb-20'>
        <div className='w-[50vw] h-[25vw] rounded-lg overflow-hidden cursor-pointer group'>
          <div className='w-full h-full relative'>
            <Image 
              src={image} 
              alt={title} 
              fill 
              className='object-contain'
            />
          </div>
        </div>
        <div className='w-[50vw] p-6 border border-[var(--gray)] rounded-sm bg-[var(--blackSecondary)] arrow-icon '>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-["Archia"] mb-2'>{title}</h1>
            <i className="ri-arrow-right-up-line text-xl"></i>
          </div>
          <p className='text-[var(--white)]/90 font-["AeonikLight"]'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard 