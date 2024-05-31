import React from 'react'

import Introduce from '../layout/Introduce'
import ProjectsNavbar from '../layout/ProjectsNavbar'
import SectionSkill from '../layout/SectionSkill'
import Footer from '../layout/Footer'
import Header from '../layout/Header'



function Home(){
    return(
        <>
            <Header />
        
            <main>
                <Introduce />
                <SectionSkill /> 
                <ProjectsNavbar />
            </main>

            <Footer />
        </>
    )
}

export default Home
