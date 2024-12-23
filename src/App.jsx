import './App.css'
import { useState } from 'react'
import { BsFillMoonFill } from "react-icons/bs"
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"
import img1 from "../assets/image.jpeg" // Corrected import path

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const services = [
    {
      title: "Full Stack Development",
      description: "Expert in building complete web applications using ReactJS, Next.js, CSS, SCSS, Tailwind, JavaScript, and TypeScript for the frontend. On the backend, I use Express.js and Flask to build scalable and efficient server-side applications."
    },
    {
      title: "MERN Stack Development",
      description: "Specialized in MongoDB, Express.js, ReactJS, and Node.js, offering dynamic and scalable web applications with seamless integration across the stack."
    },
    {
      title: "Low Level Programming",
      description: "Proficient in low-level programming using C, C++, and Assembly to create performance-critical applications and system-level software."
    },
    {
      title: "Project Planning",
      description: "Skilled in project management using MS Project to plan, track, and deliver projects on time while ensuring optimal resource allocation and task management."
    }
  ];

  return (
    <main className={`px-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} scroll-smooth min-h-screen`}>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Hello World X'D</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonFill
                className='cursor-pointer text-2xl'
                onClick={toggleDarkMode}
              />
            </li>
            <li>
              <a 
                className='bg-gradient-to-r from-cyan-500 to-cyan-400 text-white px-4 py-2 rounded-md ml-8'
                href="/path-to-your-resume/resume.pdf"
                download="resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10 animate__animated animate__fadeIn'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Hi, I'm Hrima Mohammed</h2>
          <h3 className='text-2xl py-2'>MERN Stack Developer, Software Engineer, and Project Planner</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>
            Passionate about technology and dedicated to building dynamic web applications and high-quality software.
          </p>
        </div>
        <div className='flex w-full justify-center items-center animate__animated animate__fadeIn'>
          <img src={img1} alt="Hrima Mohammed" className='rounded-full' />
        </div>
        <div className='mt-10 mb-5 text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href="https://github.com/mohammedhrima"><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/mohammed-hrima-5b08841b7/"><AiFillLinkedin /></a>
          <a href="https://www.youtube.com/@mohammedhrima7976"><AiFillYoutube /></a>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-20'>
        <div className={`py-20 ${isDarkMode ? 'bg-gradient-to-r from-teal-600 to-cyan-600' : 'bg-gradient-to-r from-teal-500 to-cyan-500'} text-white rounded-lg`}>
          <h3 className="text-center text-4xl font-semibold mb-6 animate__animated animate__fadeIn">Skills I Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ title, description, isDarkMode }) {
  return (
    <div className={`service-card ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform animate__animated animate__fadeIn`}>
      <h4 className="text-xl font-medium mb-3">{title}</h4>
      <p className="text-base leading-8">{description}</p>
    </div>
  );
}

export default App
