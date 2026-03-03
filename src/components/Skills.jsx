import React from 'react'

function Skills() {
  return (
    <section id="skills" className="pt-0 pb-32 bg-slate-900 text-white scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>

        <div className="space-y-24">
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300">
          <h3 className="text-2xl font-bold text-indigo-400 mb-6">Frontend</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">React</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">HTML</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">CSS</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">Tailwind</span>
            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">Bootstrap</span>
          </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-400 mb-6">Backend</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">Spring Boot</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">Java</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">REST API</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">JWT</span>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-indigo-400 mb-6">Machine Learning</h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">ML</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">Tensorflow</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">numPy</span>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm hover:bg-indigo-500/30 transition">Power BI</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-12">
          <a href="#education" className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors">
            My Education Background</a>
        </div>
      </div>
    </section>
  )
}

export default Skills