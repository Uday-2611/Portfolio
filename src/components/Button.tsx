import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
  return (
    <button onClick={onClick} className={`px-4 sm:px-6 py-1.5 sm:py-2 hover:bg-[var(--white)] hover:text-[var(--primary)] transition-all text-base sm:text-lg duration-300 ${className}`} >
      {children}
    </button>
  )
}

export default Button 