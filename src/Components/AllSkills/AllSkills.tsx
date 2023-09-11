import React from 'react'
import { skillset } from '../../Services/api'
import {prefix} from "../../DataStructure/Trie"
import {Tilt} from "react-tilt"

interface Item {
    type: string;
    title: string;
    logo: string;
}

interface GroupedItem {
    type: string;
    items: Item[];
}

function AllSkills() {

    const [search, setSearch] = React.useState<string>("")
    const [skills, setSkills] = React.useState<{type: string, items: Item[]}[]>([])

    React.useEffect(()=>{
        const list = skillset.map(item => {
            return item.title
        })
        prefix.UploadArray(list)
        const response = prefix.searchResponse(search)
        console.log(response);
        const newResponse = response.map(item => item.toLowerCase())
        const array: Item[] = skillset.filter(item => newResponse.includes(item.title.toLowerCase()))
        const groupedByType: GroupedItem[] = array.reduce((result: GroupedItem[], item: Item) => {
            const existingGroup = result.find((group: GroupedItem) => group.type === item.type);
            
            if (existingGroup) {
              existingGroup.items.push(item);
            } else {
              result.push({
                type: item.type,
                items: [item],
              });
            }
            
            return result;
          }, []);
          console.log(groupedByType);
          
        setSkills(groupedByType)
    },[search])

    return (
        <div className='md:mx-10 mx-2 mt-20 flex justify-center'>            
            <div className='w-full md:w-9/12 lg:w-8/12 xl:6/12'>
            <h2 className='text-center mb-5 text-white text-2xl font-bold uppercase'>Skills & Knowledge</h2>
                <input type='text' className='w-full p-2 rounded-xl outline-none bg-transparent border-gray-700 text-gray-400 border-2 placeholder:text-gray-700' value={search} placeholder='Enter Skills...' onChange={(event)=>setSearch(event.target.value)}/>
                
                    {
                        skills.map(item => {
                            return (
                                <>
                                    <h2 className='w-full text-2xl uppercase text-white mt-5 font-serif'>{item.type}</h2>
                                    <div className='grid grid-cols-2 uppercase mt-5 sm:grid-cols-3 xl:grid-cols-4 gap-4'>
                                    
                                    {
                                        item.items.map(items => {
                                            return(
                                                <Tilt key={items.title} options={{max:30, scale:1.05}} className="text-center whitespace-pre-wrap relative cursor-pointer h-32 rounded-2xl group flex justify-center items-center text-white">
                                                    {items.logo!=="" && <img alt={items.title} src={items.logo} className=' group-hover:opacity-30 rounded-2xl w-full h-full'/>}
                                                    <span className='absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] font-bold opacity-0 group-hover:opacity-100 transition duration-200'>{items.title}</span>
                                                </Tilt>
                                            )
                                        })
                                    }
                                    </div>
                                </>
                            ) 
                        })
                    }
                
                
            </div>
           
        </div>
    )
}

export default AllSkills
