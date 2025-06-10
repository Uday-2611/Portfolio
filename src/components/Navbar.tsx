import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between pt-20 p-20 text-[var(--white)]'>
            <div className='flex justify-center items-center gap-4'>
                <h1 className='uppercase text-3xl'>Uday Agarwal</h1>
            </div>
            <Button className='font-light'>CONTACT</Button>
        </div>
    )
}

export default Navbar
