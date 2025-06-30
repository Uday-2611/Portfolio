import React from 'react'

interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick }) => {
    return (
        <a href={href} onClick={onClick} className={`text-[var(--white)] w-1/2 font-["AeonikLight"] text-2xl transition-all duration-300 relative group ${className}`}>
            {children}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--white)] transition-all duration-300 group-hover:w-full"></span>
        </a>
    )
}

export default Link 