import React from 'react'
import { Link } from 'react-router-dom'

const PublicHeader = () => {
    return (
        <div className='w-full flex justify-center items-center py-2 px-4 md:px-0 bg-[#262d35] text-white'> 
            <div className='w-full md:w-[90%] flex justify-between items-center'>
                <div className='flex items-center space-x-2 font-semibold'>
                    <img src='/assets/logo.png' width='40px' alt='logo' />
                    <span className='hidden md:block'>Techies unite for Soludo</span>
                </div>
                <div className='flex space-x-3 md:space-x-6 items-center'>
                    <Link to="/" className='text-white'>Home</Link>
                    <Link to="/" className='text-white'>Mission</Link>
                    <Link to="/" className='text-white'>Project</Link>
                    <Link to="/" className='text-white'>Team</Link>
                    <Link to="/" className='text-white'>News</Link>
                </div>
                <button className='flex items-center px-6 py-1.5 rounded-md bg-[#b4040f] text-white'>Sign in</button>
            </div>
        </div>
    )
}

export default PublicHeader