import React from 'react'

function Header(prop: any) {


    const setSelected = prop.callbackFunction
    const setIsLoading = prop.setIsLoading

    return (
        <div className="h-12 flex justify-between items-center">
            <div className='md:ml-10 ml-1'>
                <h1 className='font-bold text-2xl font-mono text-gray-200 cursor-pointer flex items-center' onClick={()=>{setSelected("main"); setIsLoading(true)}}><span className=' text-blue-900'>&lt;&gt;</span> &nbsp;VISHNU M K <img src='./Images/logo.jpg' className='rounded-full w-6 ml-2' alt='logo'/></h1>
            </div>
            <div className='md:mr-10 mr-1 text-base text-gray-200 hover:text-gray-600 transition duration-200'>
                <span className='md:pr-10 mr-3 cursor-pointer hover:text-white' onClick={()=>{setSelected("Skills"); setIsLoading(true)}}><i className=' fa fa-bookmark'></i> <span className='hidden md:inline'>Skills</span></span>
                <span className='md:pr-10 mr-3 cursor-pointer hover:text-white' onClick={()=>{setSelected("Projects"); setIsLoading(true)}}><i className=' fa fa-list-check'></i> <span className='hidden md:inline'>Projects</span></span>
                <span className='md:pr-10 mr-3 cursor-pointer hover:text-white' onClick={()=>{setSelected("Experience"); setIsLoading(true)}}><i className=' fa fa-briefcase'></i> <span className='hidden md:inline'>Experience</span></span>
                <span className='cursor-pointer hover:text-white' onClick={()=>{setSelected("Resume"); setIsLoading(true)}}><i className=' fa fa-file'></i> <span className='hidden md:inline'>Resume</span></span>
            </div>
        </div>
    )
}

export default Header
