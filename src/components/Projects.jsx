import React from 'react'
import { useState } from 'react'
import ProjectModal from './ProjectModal'
import m1 from '../assets/easybuy-home.png'
import m2 from '../assets/easybuy-cart.png'
import m3 from '../assets/easybuy-login.png'
import m4 from '../assets/easybuy-order-status.png'
import m5 from '../assets/easybuy-addproduct.png'
import m6 from '../assets/easybuy-products.png'
import m7 from '../assets/easybuy-profile.png'
import m8 from '../assets/easybuy-user-order.png'
import m9 from '../assets/easybuy-user-update.png'

import l1 from '../assets/leave-front.png'
import l2 from '../assets/leave-reg.png'
import l3 from '../assets/leave-request-list.png'
import l4 from '../assets/leave-requsets.png'
import l5 from '../assets/leave-summary.png'
import l6 from '../assets/leave-type.png'
import l7 from '../assets/leave-add-request.png'
import l8 from '../assets/leave-balance-list.png'
import l9 from '../assets/leave-employee-list.png'

import m from '../assets/logo-easybuy.png'
import l from '../assets/logo-leave.png'


function Projects() {
    
    const projects = [
        {
            id : "leaveFlow",
            title : "LeaveFlow Web App",
            shortDescription : "Leave Tracker is a full-stack web application that allows employees to apply for leave and managers to review and approve requests through a streamlined digital workflow.",
            longDescription : "Leave Tracker is a full-stack leave management system developed using Spring Boot and React to simplify employee leave handling. The application enables employees to submit leave requests, view leave history, and track approval status in real time, while administrators or managers can review, approve, or reject requests through a centralized dashboard. The backend provides secure RESTful APIs for user management, leave processing, and role-based access using JWT authentication. The frontend delivers a clean and responsive interface for an efficient user experience. This project demonstrates practical enterprise workflow implementation, role-based security, and full-stack integration.",
            frontendlink :  "https://github.com/it21023996/employee-Leave-Tracker-React",
            backendlink : "https://github.com/it21023996/Employee-Leave-Tracker",
            tech : [
                "React","Springboot","Jwt","SQL","Authentication"
            ],
            logo : l,
            features :[
                "🔐 JWT Authentication & Role-Based Acces",
                "📝 Leave request submission",
                "✅ Manager approval/rejection workflow",
                "📊 Leave history tracking",
                "👥 Employee and admin dashboards",
                "📱 Responsive React UI"
            ],
            image : [l1,l2,l3,l4,l5,l6,l7,l8,l9]
        },
        {
            id : "easybuy",
            title : "EasyBuy E-Commerce Web App",
            shortDescription : "EasyBuy is a full-stack e-commerce web application that allows users to browse products, manage a shopping cart, and place orders securely. It is built using Spring Boot for the backend and React for the frontend.",
            longDescription : "EasyBuy is a modern full-stack e-commerce platform built with Spring Boot and React that delivers a smooth and responsive online shopping experience. The application enables users to securely register and log in, browse products by category, search items, add products to the shopping cart, and place orders efficiently. On the backend, RESTful APIs handle authentication, product management, cart operations, and order processing using JWT-based security. The frontend provides a dynamic and user-friendly interface with responsive design for different screen sizes. EasyBuy demonstrates full-stack development skills, clean architecture, and real-world e-commerce functionality.",
            frontendlink :  "https://github.com/it21023996/easybuy-frontend",
            backendlink : "https://github.com/it21023996/easybuy",
            tech : [
                "React","Springboot","Jwt","SQL","Authentication"
            ],
            logo : m,
            features :[
                "🔐 JWT Authentication & Authorization",
                "🛍️ Product browsing and search",
                "🛒 Shopping cart management",
                "📦 Order placement and tracking",
                "📱 Responsive React UI",
                "⚙️ RESTful API with Spring Boot"
            ],
            image : [m1,m2,m3,m4,m5,m6,m7,m8,m9]
        }
    ]

    const [selectedProject,setSelectedProject] = useState(null);

  return (
    <section id="projects" className="pb-20">
        <div className="max-w-7xl mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold text-white mb-10">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project,idx)=>(
                    <div key={idx} className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300">
                         <h3 className="text-xl font-semibold mb-2 text-indigo-400">{project.title}</h3>
                         <img src={project.logo} alt={project.title} className="w-full h-80 object-contain rounded-lg mb-4 bg-slate-700/30 p-4" />
                         <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                         <button href={project.link} 
                         onClick={()=> setSelectedProject(project)}
                         className="inline-block px-4 py-2 bg-indigo-500 rounded-lg text-white font-semibold hover:bg-indigo-600 transition-colors">
                            View Project
                            </button>
                            </div>
                ))}
            </div>
            <div className="flex justify-end mt-12">
                <a href="#skills" className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors"
                >Show My Skills</a>
            </div>
        </div>
        <ProjectModal project={selectedProject}
        onClose={()=> setSelectedProject(null)}/>
    </section>

    
  )
}

export default Projects