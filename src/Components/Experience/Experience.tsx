import React from 'react'
import { experience } from '../../Services/api'
import { Tilt } from 'react-tilt'

function Experience() {

    return (
        <>
        <h2 className='text-center mt-20 text-white text-2xl font-bold uppercase'>Experience</h2>
        <div className='mx-auto lg:w-3/4 w-11/12 mt-12 container text-gray-500 grid grid-cols-1 sm:grid-cols-2  md:gap-10 gap-3'>
            {
                experience.map(item => {
                    return(
                        <Tilt options={{max:30, scale:0.97}} key={item.title} className='p-3 border-[#323232] border-2 whitespace-pre-wrap relative rounded-3xl'>
                            <img alt={item.title} src={item.bg} className='h-36 w-full rounded-2xl opacity-10'/>
                            <div className='absolute text-xl text-gray-200 font-serif  whitespace-nowrap top-1/2 sm:ml-0 ml-2 sm:left-1/2 sm:translate-x-[-50%] translate-y-[-50%]'>
                                <div>{item.type}</div>
                                <div>{item.title}</div>
                                <div>{item.from} - {item.to}</div>
                                <div>{item.duration}</div>
                            </div>
                        </Tilt>  
                    )
                })
            }
        </div>
        </>
        
    )
}

export default Experience
