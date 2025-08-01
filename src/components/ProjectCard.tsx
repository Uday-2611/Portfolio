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

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, githubLink, }) => {
  return (
    <Link href={githubLink} target="_blank" rel="noopener noreferrer">
      <div className='w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer group relative'>
        <Image src={image} alt={title} fill className='object-cover transition-all duration-500 group-hover:blur-sm' sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw" priority />
        
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500'></div>
        
        {/* Content that pops up from bottom */}
        <div className='absolute bottom-0 left-0 right-0 p-8 bg-[var(--blackSecondary)]/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out'>
          <div className='flex items-center justify-between mb-3'>
            <h3 className='text-2xl font-["Archia"] text-[var(--white)]'>{title}</h3>
            <i className="ri-arrow-right-up-line text-xl text-[var(--white)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"></i>
          </div>
          <p className='text-md text-[var(--white)]/90 font-["AeonikLight"] leading-relaxed'>{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard 