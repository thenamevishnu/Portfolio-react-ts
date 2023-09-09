import React from 'react'
import {skills} from "../../Services/api"

interface Skill {
    title:string;
    logo:string;
}

function Skills() {

    return (
        <div className='mx-10 mt-14 flex justify-center cursor-pointer '>
            {
                skills.map((items: Skill, index: number) => { 
                    return (
                        <img key={index} src={items.logo} alt={items.title} className='w-12 h-12 inline mx-3'/>
                    )
                })
            }
        </div>
    )
}

export default Skills
