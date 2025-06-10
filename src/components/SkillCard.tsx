import React from 'react'

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className='bg-[var(--blackSecondary)] border-[var(--gray)] w-full sm:w-[30vw] md:w-[20vw] lg:w-[15vw] h-[8vh] sm:h-[10vh] border-2 p-2 sm:p-3 flex justify-start items-center gap-2 sm:gap-4 rounded-sm'>
      <div className='w-[4vh] h-[4vh] sm:w-[5vh] sm:h-[5vh] md:w-[6vh] md:h-[6vh] flex items-center justify-center text-2xl sm:text-3xl'>
        <i className={icon}></i>
      </div>
      <h3 className='text-lg sm:text-xl md:text-2xl'>{name}</h3>
    </div>
  )
}

export default SkillCard 