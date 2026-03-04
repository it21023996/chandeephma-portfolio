import React from 'react'

function About() {
  return (
    <section id="#about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 pt-0 py-20 scroll-mt-24">

      <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
        <img
          src="src\assets\profile.png" 
          alt="Anusha Chandeep"
          className="rounded-full w-48 h-48 object-cover border-4 border-indigo-400"/>
      </div>

      <div className="md:w-2/3 md:pl-12 space-y-4 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
        <p className="text-lg md:text-xl text-white/80">
         Hi, I’m Anusha Chandeep, a passionate <span className="text-indigo-400 font-semibold">Full-Stack Developer </span>
          based in Sri Lanka. I specialize in building modern web applications using <span className="text-indigo-400 font-semibold">React</span> and <span className="text-indigo-400 font-semibold">Spring Boot</span>.
         </p>
         <p className="text-white/70 text-lg md:text-xl">
          I love crafting responsive, user-friendly, and performant applications that solve real-world problems. I’m always learning new technologies and improving my coding skills.
        </p>
      
      <div className="flex flex-wrap gap-3 mt-4">
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">Spring Boot</span>
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">React</span>
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">Java</span>
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">JavaScript</span>
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">SQL</span>
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">PostgreSQL</span>
        <span className="px-3 py-1 bg-indigo-600 rounded-full text-white font-medium">Git</span>

        <span className="px-3 py-1 bg-green-600 rounded-full text-white font-medium">Python</span>
        <span className="px-3 py-1 bg-green-600 rounded-full text-white font-medium">Pandas</span>
        <span className="px-3 py-1 bg-green-600 rounded-full text-white font-medium">NumPy</span>
        <span className="px-3 py-1 bg-green-600 rounded-full text-white font-medium">TensorFlow</span>
        <span className="px-3 py-1 bg-green-600 rounded-full text-white font-medium">ML / Data Analysis</span>
      </div>
      <a href="#projects" className="inline-block mt-6 px-6 py-3 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
          See My Projects
        </a>
        </div>

    </section>
  )
}

export default About