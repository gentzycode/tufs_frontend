import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const PublicHeader = () => {

    const [shownav, setShownav] = useState(false);

    const toggleNav = () =>setShownav(!shownav);

    return (
        <div className='w-full flex justify-center items-center py-2 px-4 md:px-0 bg-[#262d35] text-white'> 
            <div className='w-full md:w-[90%] flex justify-between items-center'>
                <div className='flex items-center space-x-3 font-semibold'>
                    <img src='/assets/logo.png' width='40px' alt='logo' />
                    <span className='hidden md:block'>Techies unite for Soludo</span>
                    <span className='block md:hidden'>TUFS</span>
                </div>
                <div className='md:flex space-x-3 md:space-x-6 items-center hidden'>
                    <Link to="/" className='text-white'>Home</Link>
                    <Link to="/" className='text-white'>Mission</Link>
                    <Link to="/" className='text-white'>Project</Link>
                    <Link to="/" className='text-white'>Team</Link>
                    <Link to="/" className='text-white'>News</Link>
                </div>
                <a href="https://soludo.tech" className='md:flex hidden items-center px-6 py-1.5 rounded-md bg-[#b4040f] text-white' target="_blank" rel="noopener noreferrer">Sign in</a>
                {
                    !shownav ? 
                    <RxHamburgerMenu 
                        size={30} 
                        className='block md:hidden text-white cursor-pointer' 
                        onClick={() => toggleNav()}
                    />
                    :
                    <MdOutlineClose 
                        size={30} 
                        className='block md:hidden text-white cursor-pointer' 
                        onClick={() => toggleNav()}
                    />
                }
            </div>
            {
                shownav && <div className={`w-full md:hidden grid px-4 fixed top-14 z-40 bg-[#262d35] transition-transform duration-1000 ease-in animate-slideIn`}>
                    <div className='p-3 border-b border-[#2d353e]'>
                        <Link to="/" className='text-white'>Home</Link>
                    </div>
                    <div className='p-3 border-b border-[#2d353e]'>
                        <Link to="/" className='text-white'>Mission</Link>
                    </div>
                    <div className='p-3 border-b border-[#2d353e]'>
                        <Link to="/" className='text-white'>Project</Link>
                    </div>
                    <div className='p-3 border-b border-[#2d353e]'>
                        <Link to="/" className='text-white'>Team</Link>
                    </div>
                    <div className='p-3 border-b border-[#2d353e]'>
                        <Link to="/" className='text-white'>News</Link>
                    </div>
                    <div className='py-3 drop-shadow-xl'>
                        <a href="https://soludo.tech" target="_blank" rel="noopener noreferrer">
                            <button className='w-full p-3 rounded-md bg-[#b4040f] text-white'>Sign in</button>
                        </a>
                    </div>
                </div>
            }
        </div>
    )
}

export default PublicHeader;
