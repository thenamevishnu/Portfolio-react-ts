import React from 'react'

function Header(prop: any) {


    const setSelected = prop.callbackFunction

    return (
        <div className="h-12 flex justify-between items-center bg-[#1b1f24] z-50 fixed top-0 w-screen">
            <div className='md:ml-10 ml-1'>
                <h1 className='font-bold text-2xl font-mono text-gray-200 cursor-pointer flex items-center' onClick={()=>{setSelected("main"); }}><span className=' text-blue-900'>&lt;&gt;</span> &nbsp;VISHNU M K <img src='./Images/logo.jpg' className='rounded-full w-6 ml-2' alt='logo'/></h1>
            </div>
            <div className='md:mr-10 mr-1 text-base text-gray-200 hover:text-gray-600 transition duration-200'>
                <span className='md:pr-10 mr-3 cursor-pointer hover:text-white' onClick={()=>{setSelected("Skills"); }}><i className=' fa fa-bookmark'></i> <span className='hidden md:inline'>Skills</span></span>
                <span className='md:pr-10 mr-3 cursor-pointer hover:text-white' onClick={()=>{setSelected("Projects"); }}><i className=' fa fa-list-check'></i> <span className='hidden md:inline'>Projects</span></span>
                <span className='md:pr-10 mr-3 cursor-pointer hover:text-white' onClick={()=>{setSelected("Experience"); }}><i className=' fa fa-briefcase'></i> <span className='hidden md:inline'>Experience</span></span>
                <span className='cursor-pointer hover:text-white' onClick={()=>{setSelected("Resume"); }}><i className=' fa fa-file'></i> <span className='hidden md:inline'>Resume</span></span>
            </div>
        </div>
    )
}

export default Header
