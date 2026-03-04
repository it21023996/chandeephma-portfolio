import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Spotlight from './components/Spotlight'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Eductaion from './components/Eductaion'
import Experience from './components/Experience'
function App() {
  return (

    <div className="relative min-h-screen bg-slate-900 overflow-x-hidden">
  
  <div className="absolute inset-0 opacity-50 overflow-hidden">
  <div
    className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%]
    bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.35),transparent_60%),
        radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.30),transparent_60%),
        radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.30),transparent_60%)]
    animate-aurora"
  />
</div>
 

  <div className="relative z-10 text-white">
    <Spotlight/>
    <NavBar/>
    <section id="home" className="scroll-mt-24"><Home/></section>
    <section id="about" className="scroll-mt-24"><About/></section>
    <section id="projects" className="scroll-mt-24"><Projects/></section>
    <section id="skills" className="scroll-mt-24"><Skills/></section>
    <section id="education" className="scroll-mt-24"><Eductaion/></section>
    <section id="experience" className="scroll-mt-24"><Experience/></section>
    <section id="contact" className="scroll-mt-20"><Contact/></section>
    <Footer/>
  </div>

</div>
    
   
  )
}

export default App