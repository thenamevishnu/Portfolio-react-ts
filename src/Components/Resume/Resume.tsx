import React from 'react'

function Resume() {

    const downloadCV = async () => {
        const a = document.createElement("a")
        a.href = "./Resume/VISHNU M K - RESUME.pdf"
        a.download = `${new Date().getTime()}`
        a.click()
    }

    return (
        <div className='mt-12 text-center text-white'>
            <h1 className='text-4xl font-extrabold'>Resume</h1>
            <div className='flex justify-center'>
                <button className='bg-[#111827] border-2 rounded-xl p-1 px-2 whitespace-nowrap mt-10' onClick={downloadCV}>VISHNU M K - RESUME</button>
            </div>
            <i className='fa fa-arrow-up text-center mt-4 animate-bounce text-2xl'></i> 
        </div>
    )
}

export default Resume
