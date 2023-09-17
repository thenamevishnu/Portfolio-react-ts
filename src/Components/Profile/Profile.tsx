import React from 'react'

function Profile() {
    return (
        <div className='text-white'>
            <div className='mx-10 mt-32'>
                   <h1 className='md:text-5xl text-4xl font-extrabold text-center'>VISHNU M K</h1>
                   <h1 className='text-md font-medium italic leading-[3] text-center'>MERN STACK DEVELOPER</h1>
            </div>
            <div className='text-center flex justify-center mt-6'>
                <p className='text-center mx-2 lg:w-2/3 font-mono'>Self-taught Full-stack web developer who is enthusiastic about web-development and loves to solve problems. Capable of thinking critically, solving problems independently, and learning new concepts and technologies quickly</p>
            </div>
            <div className='text-center mt-6'>
                <button className='outline-none bg-gray-800 p-2 rounded-xl hover:bg-gray-700 mr-3' onClick={()=>window.open("https://www.linkedin.com/in/thenamevishnu","_blank")}><i className='fab fa-linkedin'></i> LinkedIn</button>
                <button className='outline-none bg-gray-800 p-2 rounded-xl hover:bg-gray-700 mr-3' onClick={()=>window.open("mailto:mail.vishnumk@gmail.com","_blank")}><i className='fab fa-email'></i> E-Mail</button>
                <button className='outline-none bg-gray-800 p-2 rounded-xl hover:bg-gray-700' onClick={()=>window.open("https://www.github.com/thenamevishnu","_blank")}><i className='fab fa-github'></i> GitHub</button>
            </div>
        </div>
    )
}

export default Profile
