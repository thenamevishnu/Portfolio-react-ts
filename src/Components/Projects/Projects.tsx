import React from 'react'
import {projects} from "../../Services/api"

function Projects() {

    return (
        <div className='mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14 gap-5'>
            {
                projects.map((item, index) => { 
                    return(
                        <div key={index} className='relative group'>
                            <img className='rounded-2xl object-contain transform group-hover:scale-[1.06] cursor-pointer duration-100 group-hover:opacity-10' src={item.logo} alt={item.logo}/>
                            <div className='flex opacity-0 group-hover:opacity-100 transform duration-500 ease-linear justify-center absolute w-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                                {item.links.frontEnd && <button className='mr-2 bg-gray-900 p-2 rounded-lg text-gray-300' onClick={()=>window.open(item.links.frontEnd,"_blank")}>Front-End</button>}
                                {item.links.backEnd && <button className='bg-gray-900 p-1 px-2 rounded-lg text-gray-300' onClick={()=>window.open(item.links.backEnd as string,"_blank")}>Back-End</button>}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects
