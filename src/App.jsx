import React from 'react'
import NavbarMain from './components/Navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from "./components/heroSection/HeroGradient"
import SubHeroMain from './components/Subhero/SubHeroMain'
import AboutMeMain from './components/about/AboutMeMain'
import ExperienceMain from './components/experience/ExperienceMain'
import SkillsMain from './components/skills/SkillsMain'
import ProjectsMain from './components/projectsection/ProjectsMain'
import ContactMeMain from './components/contact/ContactMeMain'
import Footer from './components/footer/Footermain'
const App = () => {
  return (
    <>
      <main>
       <NavbarMain />
        <HeroMain />
      <HeroGradient />
       <SubHeroMain />
        <AboutMeMain />
        <SkillsMain />
        <ExperienceMain />
        <ProjectsMain />
          <ContactMeMain />
          <Footer />
         </main>
    </>
  )
}

export default App