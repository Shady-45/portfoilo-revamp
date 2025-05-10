import React from 'react';
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full md:w-auto md:bottom-[160px] md:left-[-100px] md:rotate-90">
      <div className="flex justify-center items-center gap-3 bg-white/90 dark:bg-gray-900/90 py-3 px-4 md:bg-transparent md:dark:bg-transparent md:py-0 md:px-0">
        {/* Mobile/Tablet: Horizontal layout */}
        <div className="flex md:hidden items-center gap-4 text-[#7c7cb3]">
          <a href="https://www.linkedin.com/in/rahul-chalat-784857193/" aria-label="LinkedIn">
            <FaLinkedin size={24} className='duration-100 hover:scale-110' />
          </a>
          <a href="https://github.com/Shady-45/" aria-label="GitHub">
            <FaGithub size={24} className='duration-100 hover:scale-110' />
          </a>
          <a href="mailto:rahulchalat@gmail.com" aria-label="Email">
            <FaMailBulk size={24} className='duration-100 hover:scale-110' />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-3 text-[#7c7cb3]">
          <a href="https://www.linkedin.com/in/rahul-chalat-784857193/" aria-label="LinkedIn">
            <FaLinkedin size={30} className='duration-100 -rotate-90 hover:scale-110' />
          </a>
          <a href="https://github.com/Shady-45/" aria-label="GitHub">
            <FaGithub size={30} className='duration-100 -rotate-90 hover:scale-110' />
          </a>
        
          <a href="mailto:rahulchalat@gmail.com" aria-label="Email">
            <FaMailBulk size={30} className='duration-100 -rotate-90 hover:scale-110' />
          </a>
          <hr className="w-[140px] border-2 border-gray-300" />
        </div>
      </div>
    </div>
  )
}

export default Footer;