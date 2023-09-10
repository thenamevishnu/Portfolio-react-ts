import React from 'react'
import { skillset } from '../../Services/api'
import {prefix} from "../../DataStructure/Trie"

function AllSkills() {

    const [search, setSearch] = React.useState<string>("")
    const [skills, setSkills] = React.useState<{title: string, logo: string}[]>([])

    React.useEffect(()=>{
        const list = skillset.map(item => {
            return item.title
        })
        prefix.UploadArray(list)
        const response = prefix.searchResponse(search)
        console.log(response);
        const newResponse = response.map(item => item.toLowerCase())
        const array = skillset.filter(item => newResponse.includes(item.title.toLowerCase()))
        setSkills(array)
    },[search])

    return (
        <div className='md:mx-10 mx-2 mt-12 flex justify-center'>
            
            <div className='w-full md:w-9/12 lg:w-8/12 xl:6/12'>
            <h2 className='text-center mb-5 text-red-700 animate-pulse'>This Page Under development</h2>
                <input type='text' className='w-full p-2 rounded-xl outline-none bg-transparent border-gray-700 text-gray-400 border-2 placeholder:text-gray-700' value={search} placeholder='Enter Skills...' onChange={(event)=>setSearch(event.target.value)}/>
                <div className='grid grid-cols-2 mt-5 sm:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        skills.map(item => {
                            return (
                                <div className="text-center relative cursor-pointer h-32 rounded-2xl group whitespace-nowrap flex justify-center items-center text-white ">
                                    {item.logo!=="" && <img alt={item.title} src={item.logo} className=' group-hover:opacity-10 rounded-2xl w-full h-full'/>}
                                    <span className='absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] font-bold opacity-0 group-hover:opacity-100 transition duration-200'>{item.title}</span>
                                </div>
                            ) 
                        })
                    }
                </div>
                
            </div>
           
        </div>
    )
}

export default AllSkills
