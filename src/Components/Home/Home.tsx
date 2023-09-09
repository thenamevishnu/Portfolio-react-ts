import React from 'react'
import Profile from '../Profile/Profile'
import Skills from '../Skills/Skills'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Loader from '../Loader/Loader'
import Resume from '../Resume/Resume'

function Home() {

    const [clicked, setClicked] = React.useState<string>("main")
    const [isLoading,setIsLoading] = React.useState<boolean>(true)
    

    React.useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsLoading(false)
        },1200)
        return()=>{
            clearTimeout(timer)
        }
    },[clicked])

    const getClicked = async (data: string): Promise<void> => {
        setClicked(data)
    }

    return (
        <>
            <Header callbackFunction={getClicked} setIsLoading={setIsLoading}/>
            {isLoading ? <Loader/> :
                clicked==="main" ?
                <>
                    <Profile/>
                    <Skills/>
                </>
                :
                clicked==="Projects" ? 
                <Projects/>
                : clicked==="Resume" ? <Resume/>
                : ""
            }
        </>
    )
}

export default Home
