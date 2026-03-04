import React from 'react'
import { Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function Contact() {
  const formRef = useRef();
  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm(
      "service_7ggjsit",
      "template_k5w42vx",
      formRef.current,
      "c9S8QNZ8_XV_LXc86"
    )
    .then(
      ()=>{
        alert("Message sent successfully!");
      },
      (error)=>{
        alert("Message sent successfully!");
        console.log(error)
      }
    )
  }
  return (
    <section id="contact" className="pt-0 pb-16 bg-slate-900 text-white scroll-mt-32">
      <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h3>
          </div>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">I'm currently open to internships and junior developer roles.
            Feel free to reach out — I’d love to connect!</p>


          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl text-center hover:shadow-indigo-500/30 transition">
            <h3 className="text-indigo-400 font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm">anushachandeep12@gmail.com</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl text-center hover:shadow-indigo-500/30 transition">
            <h3 className="text-indigo-400 font-semibold mb-2">Phone</h3>
            <p className="text-gray-300 text-sm">+94 71 53 966 52</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur p-6 rounded-2xl text-center hover:shadow-indigo-500/30 transition">
            <h3 className="text-indigo-400 font-semibold mb-2">Location</h3>
            <p className="text-gray-300 text-sm">Sri Lanka</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8 mb-8 flex-wrap">
              <a href="https://www.linkedin.com/in/anusha-chandeep-heenkenda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                <Linkedin size={20}
                />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a href="https://github.com/it21023996"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-indigo-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/30">
                <Github size={20}
                />
                <span className="font-medium">GitHub</span>
              </a>
            </div>

          <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur p-8 md:p-8 rounded-2xl shadow-lg">
          <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
              type="text" 
              name ="user_name"
              placeholder='Your Name'
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
              required/>
              <input
              type="email" 
              placeholder='Your Email'
              name = "user_email"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
              required/>
            </div>
            <textarea name='message' rows="4"
            placeholder='Your Message'
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
            required/>
            <div className="text-center">
              <button type="submit" className="px-8 py-3 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
                Send Message
              </button>
            </div>
          </form>
          </div>
      </div>

    </section>
  )
}

export default Contact