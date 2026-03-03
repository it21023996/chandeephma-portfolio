import React from 'react'

function Home() {
  return (
    <section id="#home"
    className="min-h-screen flex flex-col justify-center items-start px-6 md:px-24 pt-24 scroll-mt-24">
    <div className="space-y-4">
      
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Anusha Chandeep Heenkenda</h1>
          <h2 className="text-xl md:text-3xl text-indigo-400 font-semibold">
            <span className="text-indigo-400 font-bold animate-pulse">Full-Stack Developer</span></h2>
          <p className="text-white/70 text-lg md:text-xl">
          Building modern web applications with <span className="text-indigo-400 font-bold">React</span> & <span className="text-indigo-400 font-bold">Spring Boot</span>
          </p>

          <a href="#about"
          className="inline-block mt-6 px-6 py-3 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-600 transition-colors shadow-lg">
          Learn More About Me</a>
        
    </div>
    </section>
  )
}

export default Home