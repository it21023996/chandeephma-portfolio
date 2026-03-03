import React from 'react'
import { useState,useEffect } from 'react'
function Spotlight() {
    const [position,setPostion] =useState({x:0,y:0})
    useEffect(()=>{
        const handleMove = (e)=>{
            setPostion({x:e.clientX,y:e.clientY});
        };
        window.addEventListener("mousemove",handleMove);
        return ()=> window.removeEventListener("mousemove",handleMove);
    },[])
  return (
    <div className='pointer-events-none fixed inset-0 z-30 transition duration-300'
    style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.05), transparent 30%)`,
      }}></div>
  )
}

export default Spotlight