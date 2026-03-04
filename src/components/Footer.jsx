import React from 'react'
import { Linkedin, Github } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8 border-t border-slate-800" >
      <div  className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold text-lg">Anusha Chandeep Heenkenda</h4>
            <p className="text-sm text-gray-500">
          Full-Stack Developer
        </p>
          </div>
          <div className="flex gap-6 text-sm">
        <a href="#home" className="hover:text-indigo-400 transition">Home</a>
        <a href="#about" className="hover:text-indigo-400 transition">About</a>
        <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
        <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
        <a href="#education" className="hover:text-indigo-400 transition">Education</a>
        <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
        <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
      </div>
      <div className="flex gap-4">
        <a
          href="https://github.com/it21023996"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition"
        >
          <Github size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/anusha-chandeep-heenkenda"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition"
        >
          <Linkedin size={18} />
        </a>
      </div>

        </div>
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Anusha Chandeep. All rights reserved.
          </div>
      </div>
    </footer>
  )
}

export default Footer