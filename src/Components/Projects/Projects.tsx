import React from 'react'
import {projects} from "../../Services/api"
import { Tilt } from 'react-tilt'

// interface Links{
//     frontEnd: string|null;
//     backEnd: string|null;
// }

// interface Item{
//     logo: string|null|undefined;
//     title: string|null|undefined;
//     links: Links
// }

function Projects() {

    return (
        <>
        <h2 className='text-center mb-5 text-white text-2xl mt-20 font-bold uppercase'>PROJECTS</h2>
            <div className='mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 gap-5'>
                {
                    projects.map((item, index) => {  
                        return(
                            <Tilt key={index} options={{max:30, scale:0.97}} className='relative group text-center'>
                                <img className='rounded-2xl object-contain transform group-hover:scale-[1.06] cursor-pointer duration-100 group-hover:opacity-30' src={item.logo} alt={item.logo}/>
                                {item.title && <p className='absolute opacity-0 top-[-10%] left-1/2 translate-x-[-50%] text-white uppercase transition-all duration-300 group-hover:opacity-100 font-bold font-mono group-hover:top-0'>{item.title}</p>}
                                <span className='opacity-0 cursor-pointer group-hover:opacity-100 flex transform duration-300 ease-linear'>
                                    {item.links.frontEnd && <button className='w-full bg-gray-800 text-white mt-1 rounded-xl p-2' onClick={()=>window.open(item.links.frontEnd,"_blank")}>Front End</button>}
                                    {item.links.backEnd && <button className='w-full bg-gray-800 mx-2 text-white mt-1 rounded-xl p-2'  onClick={()=>window.open(item.links.backEnd as string,"_blank")}>Back End</button>}
                                </span>
                            </Tilt>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Projects
