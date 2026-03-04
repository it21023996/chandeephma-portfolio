import React from 'react'

function Experience() {
    const exp = {
        image : "src/assets/wij.jpg",
        company : "Wijeya Newspapers Ltd. Colombo",
        role : "Business Intelligence Analyst (Intern)",
        duration : "04/2024 – 12/2024",
        description : [
            "Assisted in data collection, processing, and analysis to support business decisionmaking.",
            "Developed reports and dashboards using Power BI and SQL for data visualization.",
            "Collaborated with cross-functional teams to improve business intelligence strategies.",
            "Conducted research and provided insights on data-driven business solutions."
        ]
    }
  return (
    <section id="experience" className="min-h-screen pt-8 pb-20 bg-slate-900 text-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-2">
            <div className="text-3xl md:text-4xl font-bold mb-16 text-center">
                <h3 className="text-3xl font-bold text-white mb-10">My Experiences</h3>
            </div>
            <div className="relative">
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-indigo-500/30 rounded-full"></div>

            <div className="relative md:pl-24">
                 <div className="hidden md:block absolute left-[18px] top-6 w-6 h-6 bg-indigo-400 rounded-full border-4 border-slate-900"></div>

                    <div  className="bg-slate-800/80 backdrop-blur p-8 md:p-20 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-10 mb-6">
                    <img src={exp.image} alt0="Wijeya logo" 
                    className="w-20 h-20 object-contain rounded-lg bg-white p-2 shadow-md"/>

                    <div>
                    <h3 className="text-2xl font-semibold text-indigo-400">{exp.role}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                     </div>
                     <ul className="space-y-3">
                        {exp.description.map((d,i)=>(
                            <li key={i}  className="flex items-start gap-3 text-gray-300">
                                <span className="mt-2 w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                                <span>{d}</span>
                            </li>
                        ))}
                       </ul>
                    </div>
                </div>
               
            </div>
            </div>
            <div className="flex justify-center mt-12">
                <a href='#contact' className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors">Contact Me</a>
            </div>
        </div>
    </section>
  )
}

export default Experience