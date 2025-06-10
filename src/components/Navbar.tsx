import React from 'react'
import Button from './Button'

const Navbar = () => {
    const scrollToMail = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.getElementById('mail');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='w-full flex justify-between pt-10 md:pt-16 lg:pt-20 px-6 sm:px-10 md:px-16 lg:p-20 text-[var(--white)]'>
            <div className='flex justify-center items-center gap-2 md:gap-4'>
                <h1 className='uppercase text-xl sm:text-2xl md:text-3xl'>Uday Agarwal</h1>
            </div>
            <Button className='font-light text-sm md:text-base' onClick={scrollToMail}>CONTACT</Button>
        </div>
    )
}

export default Navbar
