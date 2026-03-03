import React from 'react'
import { useState } from 'react';
import { Github } from "lucide-react";

function ProjectModal({project,onClose}) {
  const [currentImg,setCurrentImg] = useState(0);
  if(!project) return null;

  
  const nextImg = ()=>{
    setCurrentImg((prev)=>(
      prev === project.image.length -1 ? 0 : prev + 1 
    ))
  }
  const prevImg =()=>{
    setCurrentImg((prev)=>(
      prev === 0 ? project.image.length -1 : prev -1
    ))
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      {/*model design*/}
      <div className="bg-slate-900 max-w-3xl w-full rounded-2xl p-6 relative shadow-2xl">
        <button 
        onClick={onClose} 
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-red-500 text-gray-300 hover:text-white transition">X</button>

        <h3 className="text-2xl font-bold text-indigo-400 mb-4">{project.title}</h3>

        <p className="text-gray-300 mb-6">{project.longDescription}</p>

        
        <ul className="mb-6 flex flex-col gap-2">{project.features?.map((f,i)=>(
          <li key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm w-fit">{f}</li>
        ))}</ul>
        

        

        <div className="relative mb-6">
          <img src={project.image[currentImg]} alt="project" className="w-full h-100 object-contain rounded-xl bg-slate-1000 p-4" />
          <button onClick={prevImg} 
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-indigo-500 w-10 h-10 rounded-full flex items-center justify-center">
            ◀</button>
          <button onClick={nextImg} 
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-indigo-500 w-10 h-10 rounded-full flex items-center justify-center">
            ▶</button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">{project.tech?.map((t,i)=>(
          <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">{t}</span>
        ))}</div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href={project.frontendlink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
          <Github size={18}/>Frontend Repo</a>
          
          <a href={project.backendlink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-medium hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300">
          <Github size={18}/>Backend Repo</a>
        </div>

      </div>

    </div>
  )
}

export default ProjectModal