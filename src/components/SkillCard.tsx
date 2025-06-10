import React from 'react'

interface SkillCardProps {
  name: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className='bg-[var(--blackSecondary)] border-[var(--gray)] w-[15vw] h-[10vh] border-2 p-3 flex justify-start items-center gap-4 rounded-sm'>
      <div className='w-[6vh] h-[6vh] flex items-center justify-center text-3xl'>
        <i className={icon}></i>
      </div>
      <h3 className='text-2xl'>{name}</h3>
    </div>
  )
}

export default SkillCard 