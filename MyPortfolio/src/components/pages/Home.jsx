import React from 'react'

import Introduce from '../layout/Introduce'
import ProjectsNavbar from '../layout/ProjectsNavbar'
import SectionSkill from '../layout/SectionSkill'
import Footer from '../layout/Footer'

function Home(){
    return(
        <>
            <main>

                <Introduce />
                <SectionSkill /> 
                <ProjectsNavbar />
                <Footer />
            </main>
        </>
    )
}

export default Home