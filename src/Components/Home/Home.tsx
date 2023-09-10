import React from 'react'
import Profile from '../Profile/Profile'
import Skills from '../Skills/Skills'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Resume from '../Resume/Resume'
import AllSkills from '../AllSkills/AllSkills'
import Experience from '../Experience/Experience'

function Home() {

    const [clicked, setClicked] = React.useState<string>("main")
    const [moved,setMoved] = React.useState<{x:number, y:number}>({x:0,y:0})

    const getClicked = async (data: string): Promise<void> => {
        setClicked(data)
    }

    const handleMouseMove = (e: MouseEvent) => {
        setMoved({x:e.clientX,y:e.clientY})
    }

    window.addEventListener("mousemove",handleMouseMove)

    return (
        <>
        <div className='w-14 h-14 opacity-30 absolute transition-transform transform rounded-full ease-in-out scroll-smooth pointer-events-none' style={{left:`${moved.x - 27}px`,top:`${moved.y - 27}px`, boxShadow:"0 0 50px white", backgroundColor:"rgba(255, 255, 255, 0.2)", filter:"blur(10px)"}}></div>
            <Header callbackFunction={getClicked}/>
            {
                clicked==="main" ?
                <>
                    <Profile/>
                    <Skills/>
                </>
                :
                clicked==="Projects" ? 
                <Projects/>
                : clicked==="Resume" ? <Resume/>
                : clicked==="Skills" ? <AllSkills/>
                : clicked ==="Experience" ? <Experience/> : ""
            }
        </>
    )
}

export default Home
