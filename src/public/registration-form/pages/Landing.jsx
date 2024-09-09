import React, { useState } from 'react'
import PublicHeader from '../../layout/PublicHeader'
import { FaArrowRight, FaCircle, FaRegEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';

const Landing = () => {

    return (
        <div className='w-full m-0 bg-[#1e252d]'>
            <div className='w-full'>
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <PublicHeader />

                        {/** START HOME BANNER */}
                        <div className='w-full flex justify-center mt-6 pb-6'>
                            <div className='w-[90%] flex'>
                                <div className='w-full md:w-3/5 leading-tight mt-6 text-white text-2xl md:text-6xl'>Powering Anambra's Tech Revolution: Techies Unite For Soludo</div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='md:flex items-center w-[90%] space-y-4 md:space-y-0'>
                                <div className='w-full md:w-1/2 grid space-y-8'>
                                    <span className='text-white text-lg md:w-[80%]'>Join TUFS to champion Anambra's technological growth and shape a brighter, tech-driven future beyond 2025.</span>
                                    <a href="https://soludo.tech" target="_blank" rel="noopener noreferrer">
                                    <div className='flex max-w-max items-center space-x-3 rounded-md bg-[#b4040f] p-3 text-white cursor-pointer'>
                                        <span>Discover more</span>
                                        <FaArrowRight size={12} className='mt-1' />
                                    </div>
                                </a>

                                </div>
                                <div className='w-full md:w-1/2'>
                                    <img src='/assets/banner-icon.png' alt='banner icon' />
                                </div>
                            </div>
                        </div>
                        {/** END HOME BANNER */}

                        <div className='flex justify-center mt-6 md:mt-12'>
                            <div className='w-[90%]'>

                                {/** START MISSION */}
                                <div className='md:flex items-center space-y-4 md:space-y-0'>
                                    <h1 className='text-3xl text-white'>Mission</h1>
                                </div>
                                <div className='w-full md:flex items-center bg-[#161d26] rounded-xl p-6 mt-6'>
                                    <div className='w-1/2'>
                                        <img src='/assets/soludo.png' alt='soludo' />
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <span className='text-white text-lg'>
                                        Our mission is to sustain and advance the technological revolution initiated by Governor Soludo, ensuring that Anambra State remains a leader in digital transformation. We are committed to driving innovation and fostering collaboration to secure a prosperous future, aligning our efforts with the Vision 2070 agenda. By promoting continuity beyond 2025, we aim to enhance the quality of life for all residents and position Anambra State as a beacon of technological progress and sustainable development for generations to come.                                        </span>
                                    </div>
                                </div>
                                {/** END MISSION */}

                                {/** START VISION */}
                                <div className='w-full flex justify-center rounded-xl bg-[url("/assets/vision2070.png")] bg-cover mt-6'>
                                    <div className='w-[90%]'>
                                        <div className='text-6xl font-medium text-white uppercase my-24'>
                                        vision 2070
                                        </div>
                                        <div className='w-full md:flex md:justify-between md:items-center my-8 space-y-4 md:space-y-0'>
                                            <div className='w-full md:w-2/3'>
                                                <span className='text-white'>
                                                Explore the future with our cutting-edge projects for 2070, from AI-driven cities to space exploration and immersive virtual realities. We're pushing boundaries to create a smarter, more connected, and sustainable world that enhances every aspect of life.
                                                </span>
                                            </div>
                                            <div className='w-full flex justify-end items-center md:w-1/3'>
                                                <button className='py-3 px-4 rounded-md bg-[#b4040f] text-white'>Know more</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/** END VISION */}

                                {/** START PROJECTS */}
                                <div className='md:flex items-center space-y-4 md:space-y-0'>
                                    <h1 className='text-3xl text-white mt-12'>Ongoing Projects</h1>
                                </div>
                                <div className='md:flex md:items-center md:justify-between space-y-4 md:space-y-0 mt-8'>
                                    <div className='w-full md:w-[32%] bg-[#262d35] rounded-xl border-l-2 border-[#b4040f] p-4 shadow-xl'>
                                        <img src='/assets/project1.png' alt='project 1' className='rounded-xl' />
                                        <div className='my-4 space-y-4'>
                                            <h1 className='font-semibold text-white text-lg'>Project 100 laptops</h1>
                                            <p className='text-white font-light'>
                                            Project soludo provides laptops to schools, bridging the digital divide and empowering students with the tools they need for a tech-driven future
                                            </p>
                                            <p><Link to="/" className='text-blue-600'>More Info...</Link></p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[32%] bg-[#262d35] rounded-xl border-l-2 border-[#b4040f] p-4 shadow-xl'>
                                        <img src='/assets/project2.png' alt='project 2' className='rounded-xl' />
                                        <div className='my-4 space-y-4'>
                                            <h1 className='font-semibold text-white text-lg'>Project 100 laptops</h1>
                                            <p className='text-white font-light'>
                                            Project soludo provides laptops to schools, bridging the digital divide and empowering students with the tools they need for a tech-driven future
                                            </p>
                                            <p><Link to="/" className='text-blue-600'>More Info...</Link></p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[32%] bg-[#262d35] rounded-xl border-l-2 border-[#b4040f] p-4 shadow-xl'>
                                        <img src='/assets/project1.png' alt='project 3' className='rounded-xl' />
                                        <div className='my-4 space-y-4'>
                                            <h1 className='font-semibold text-white text-lg'>Project 100 laptops</h1>
                                            <p className='text-white font-light'>
                                            Project soludo provides laptops to schools, bridging the digital divide and empowering students with the tools they need for a tech-driven future
                                            </p>
                                            <p><Link to="/" className='text-blue-600'>More Info...</Link></p>
                                        </div>
                                    </div>
                                </div>
                                {/** END PROJECTS */}

                                {/** START TEAM */}
                                <div className='mt-24'>
                                    <div className='w-full bg-[#b4040f] rounded-xl p-6 md:py-16 md:px-28 text-white space-y-4'>
                                        <p className='w-full flex justify-center'>
                                            <img src='/assets/our-team-icon.png' alt='team icon' width='50px' />
                                        </p>
                                        <p className='w-full flex justify-center'>
                                            <span className='text-white font-semibold text-4xl'>Our Team</span>
                                        </p>
                                        <p className='text-white font-light text-justify'>Our team excels through efficiency, diverse expertise, and a collaborative approach, ensuring timely project delivery that exceeds expectations. By combining technical skills, strategic vision, and market awareness, we adapt quickly to industry changes, continuously improving our products. Our culture of learning and accountability drives high performance and innovative solutions to complex challenges.</p>
                                    </div>
                                </div>
                                <div className='md:flex md:items-center md:justify-between space-y-4 md:space-y-0 mt-8'>
                                    <div className='w-full md:w-[32%] bg-[#262d35] rounded-xl p-4 shadow-xl'>
                                        <div className='w-full flex justify-center'>
                                            <img src='/assets/founder1.png' alt='founder 1' className='rounded-xl' />
                                        </div>
                                        <div className='my-4 space-y-4'>
                                            <div className='w-full flex justify-center'>
                                                <span className='font-extralight text-white text-lg'>CEO & Founder</span>
                                            </div>
                                            <div className='w-full flex justify-center'>
                                                <span className='font-semibold text-white text-lg'>John Doe</span>
                                            </div>
                                            <p className='font-normal text-white text-center'>
                                            Visionary leader with a background in software engineering and business strategy. John drives the company’s mission to innovate and disrupt the tech industry, leveraging over 15 years of experience in tech startups.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[32%] bg-[#262d35] rounded-xl p-4 shadow-xl'>
                                        <div className='w-full flex justify-center'>
                                            <img src='/assets/founder2.png' alt='founder 2' className='rounded-xl' />
                                        </div>
                                        <div className='my-4 space-y-4'>
                                            <div className='w-full flex justify-center'>
                                                <span className='font-extralight text-white text-lg'>CFO</span>
                                            </div>
                                            <div className='w-full flex justify-center'>
                                                <span className='font-semibold text-white text-lg'>Mark Lee</span>
                                            </div>
                                            <p className='font-normal text-white text-center'>
                                            oversees the financial health of the company, managing budgets, forecasting, and investor relations. With a strong background in finance and accounting, he ensures that the company is financially sound and poised for sustainable growth.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[32%] bg-[#262d35] rounded-xl p-4 shadow-xl'>
                                        <div className='w-full flex justify-center'>
                                            <img src='/assets/founder1.png' alt='founder 1' className='rounded-xl' />
                                        </div>
                                        <div className='my-4 space-y-4'>
                                            <div className='w-full flex justify-center'>
                                                <span className='font-extralight text-white text-lg'>CEO & Founder</span>
                                            </div>
                                            <div className='w-full flex justify-center'>
                                                <span className='font-semibold text-white text-lg'>John Doe</span>
                                            </div>
                                            <p className='font-normal text-white text-center'>
                                            Visionary leader with a background in software engineering and business strategy. John drives the company’s mission to innovate and disrupt the tech industry, leveraging over 15 years of experience in tech startups.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/** END TEAM */}

                                {/** START NEWS */}
                                <div className='md:flex items-center space-y-4 md:space-y-0'>
                                    <h1 className='text-3xl text-white mt-12'>News Updates</h1>
                                </div>
                                <div className='md:flex md:items-center md:justify-between space-y-4 md:space-y-0 mt-8'>
                                    <div className='w-full md:w-[31%] bg-[#262d35] rounded-xl shadow-xl'>
                                        <img src='/assets/news-update.png' alt='new update 1' className='rounded-t-xl w-full' />
                                        <div className='my-2 space-y-4 p-4'>
                                            <div className='w-full flex justify-between items-center text-gray-300'>
                                                <span className='font-extralight'>Admin</span>
                                                <span className='font-extralight'>Mon 12, August 2024</span>
                                            </div>
                                            <h1 className='font-semibold text-white'>AI breakthrough with a new model that enhances natural languag</h1>
                                            <p className='text-white font-light'>
                                            A leading tech company has announced a major AI breakthrough with a new model that enhances natural language understanding and generation.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[31%] bg-[#262d35] rounded-xl shadow-xl'>
                                    <img src='/assets/news-update.png' alt='new update 2' className='rounded-t-xl w-full' />
                                        <div className='my-2 space-y-4 p-4'>
                                            <div className='w-full flex justify-between items-center text-gray-300'>
                                                <span className='font-extralight'>Admin</span>
                                                <span className='font-extralight'>Mon 12, August 2024</span>
                                            </div>
                                            <h1 className='font-semibold text-white'>AI breakthrough with a new model that enhances natural languag</h1>
                                            <p className='text-white font-light'>
                                            A leading tech company has announced a major AI breakthrough with a new model that enhances natural language understanding and generation.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[31%] bg-[#262d35] rounded-xl shadow-xl'>
                                        <img src='/assets/news-update.png' alt='new update 3' className='rounded-t-xl w-full' />
                                        <div className='my-2 space-y-4 p-4'>
                                            <div className='w-full flex justify-between items-center text-gray-300'>
                                                <span className='font-extralight'>Admin</span>
                                                <span className='font-extralight'>Mon 12, August 2024</span>
                                            </div>
                                            <h1 className='font-semibold text-white'>AI breakthrough with a new model that enhances natural languag</h1>
                                            <p className='text-white font-light'>
                                            A leading tech company has announced a major AI breakthrough with a new model that enhances natural language understanding and generation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/** END NEWS */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/** START FOOTER */}
            <div className='flex justify-center w-full bg-[#b4040f] mt-48'>
                <div className='w-[90%] md:flex md:justify-between my-24 space-y-12 md:space-y-0'>
                    <div className='w-full md:w-[31%] grid space-y-2'>
                        <img src='/assets/logo.png' alt='logo' />
                        <p className='text-white font-semibold text-lg'>
                        Techies unite for Soludo
                        </p>
                        <p className='text-white font-thin'>
                        TUFS holds the vision for 2070, leading the revolution in the future of technology
                        </p>
                    </div>
                    <div className='w-full md:w-[31%] grid'>
                        <div className='flex justify-between'>
                            <div className='space-y-3'>
                                <h1 className='text-white font-semibold text-lg'>Quick Links</h1>
                                <ol className='space-y-3 text-[#ffcc2a]'>
                                    <li className='flex items-center space-x-3'>
                                        <FaCircle size={12} className='text-[#ffcc2a]' />
                                        <Link to='/' className='text-white font-extralight'>Home</Link>
                                    </li>
                                    <li className='flex items-center space-x-3'>
                                        <FaCircle size={12} className='text-[#ffcc2a]' />
                                        <Link to='/' className='text-white font-extralight'>About us</Link>
                                    </li>
                                    <li className='flex items-center space-x-3'>
                                        <FaCircle size={12} className='text-[#ffcc2a]' />
                                        <Link to='/' className='text-white font-extralight'>Contact us</Link>
                                    </li>
                                </ol>
                            </div>
                            <div className='space-y-3'>
                                <h1 className='text-white font-semibold text-lg'>Information</h1>
                                <ol className='space-y-3 text-[#ffcc2a]'>
                                    <li className='flex items-center space-x-3'>
                                        <FiPhone size={15} className='text-[#ffcc2a]' />
                                        <span className='text-white font-extralight'>+123-768-543</span>
                                    </li>
                                    <li className='flex items-center space-x-3'>
                                        <FaRegEnvelope size={15} className='text-[#ffcc2a]' />
                                        <span className='text-white font-extralight'>soludo@gmail.com</span>
                                    </li>
                                    <li className='flex items-center space-x-3'>
                                        <GrLocation size={15} className='text-[#ffcc2a]' />
                                        <span className='text-white font-extralight'>122 avenue , new york city</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[31%] grid'>
                        <div className='text-white font-semibold text-lg'>
                        Join our community
                        </div>
                        <div className='flex justify-between items-center mt-6 md:mt-[-80px]'>
                            <input 
                                type='text' 
                                className='w-[80%] md:w-[75%] p-4 bg-white rounded-md' 
                                placeholder='Enter your email'
                            />
                            <button className='px-6 py-4 rounded-md bg-[#ffcc2a]'>Go</button>
                        </div>
                    </div>
                </div>
            </div>
            {/** END FOOTER */}
        </div>
        
    )
}

export default Landing