import React from 'react'

function Eductaion() {
  const educationList = [
    {
      degree : "BSc (Hons) in Information Technology - Data Science",
      institution :  "Sri Lanka Institute of Information Technology (SLIIT)",
      period : "2021-2025",
      gpa : "GPA: 3.2/4.0",
      logo : "src/assets/SLIIT.png"
    },
    {
      degree : "GCE A/L",
      institution :  "President College Minuwangoda",
      period : "2012-2018",
      gpa : "Science Stream",
      logo : "src/assets/mpc.png"
    }
  ]
  return (
    <section id="education" className="pt-0 pb-20 bg-slate-900 text-white scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6">
         <h2 className="text-3xl font-bold text-white mb-10">Education</h2>
      <div className="relative space-y-6">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-indigo-500/40 rounded-full hidden md:block"> </div>
      {educationList.map((edu,i)=>(
        <div key={i}  className="relative md:pl-16">
          <div className="absolute md:left-3 top-4 w-6 h-6 bg-indigo-400 rounded-full border-2 border-white"></div>

          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300">
          <img src={edu.logo} alt={`${edu.institution} logo`} 
          className="w-16 h-16 object-contain mb-4 shadow-md"/>
        <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{edu.degree}</h3>
        <p className="text-gray-300 mb-1">{edu.institution}</p>
        {edu.gpa && <p className="text-gray-400 text-sm mb-2">{edu.gpa}</p>}
        <p className="text-gray-400 text-sm mt-2">{edu.period}</p>
        </div>
      </div>
      ))}
      
      </div>
      <div className="flex justify-end mt-12">
      <a href='#home' className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors">Show My Experience</a>
      </div>
      </div>
    </section>
  )
}

export default Eductaion