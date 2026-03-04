import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-slate-900/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Chan.dev</div>
        <div  className="space-x-6">
          <button onClick={() => scrollToSection("home")} className="relative text-white hover:text-indigo-400 transition-colors group">Home
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></button>
          <button onClick={() => scrollToSection("about")} className="relative text-white hover:text-indigo-400 transition-colors group">About
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></button>
          <a href="#projects" className="relative text-white hover:text-indigo-400 transition-colors group">Projects
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></a>
          <a href="#skills" className="relative text-white hover:text-indigo-400 transition-colors group">Skills
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></a>
           <a href="#education" className="relative text-white hover:text-indigo-400 transition-colors group">Education
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></a>
          <a href="#experience" className="relative text-white hover:text-indigo-400 transition-colors group">Experience
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></a>
          <a href="#contact" className="relative text-white hover:text-indigo-400 transition-colors group">Contact
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-400 rounded-full animate-pulse"></span></a>
        </div>
      </div>
    </nav>

  )
}

export default NavBar