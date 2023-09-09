import React from 'react'
import { allSkills } from '../../Services/api'
import {prefix} from "../../DataStructure/Trie"

function AllSkills() {

    const [search, setSearch] = React.useState<string>("")
    const [skills, setSkills] = React.useState<string[]>([])

    React.useEffect(()=>{
        const list = allSkills.map(item => {
            return item.title
        })
        prefix.UploadArray(list)
        const response = prefix.searchResponse(search)
        setSkills(response)
    },[search])

    return (
        <div className='mx-10 mt-12 flex justify-center'>
            <div className='w-full md:w-9/12 lg:w-8/12 xl:6/12'>
                <input type='text' className='w-full p-2 rounded-xl outline-none bg-transparent border-gray-700 text-gray-400 border-2 placeholder:text-gray-700' value={search} placeholder='Enter Skills...' onChange={(event)=>setSearch(event.target.value)}/>
                <div className='grid grid-cols-7 gap-3 mt-5'>
                    {
                        skills.map(item => {
                            return (
                                <div className='text-center cursor-pointer p-1 bg-gray-800 text-gray-400'>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className='text-center mt-10 text-red-700 animate-pulse'>This Page Under development</h2>
            </div>
           
        </div>
    )
}

export default AllSkills
