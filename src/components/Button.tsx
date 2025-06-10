import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return (
    <button className={`px-6 py-2 hover:bg-[var(--white)] hover:text-[var(--primary)] transition-all text-lg duration-300 ${className}`} >
      {children}
    </button>
  )
}

export default Button 