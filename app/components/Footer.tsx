import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <main className='w-full m-auto flex gap-6 items-center justify-center text-3xl'>
        <IoMailSharp  />
        <FaGithub />
        <FaLinkedin />
    </main>
    </>
  )
}

export default Footer
