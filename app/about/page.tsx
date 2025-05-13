"use client"
import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Image from 'next/image'
import AboutImg from '../../public/About.png'
import { TechData } from '@/utils/_index'
import {motion} from 'framer-motion'
import TitleAnimation from '../components/TitleAnimation'

const About = () => {
  const openResume = () => {
    window.open('/Rahul_Chalat_SWE_Resume.pdf', '_blank');
  };
  
  return (
   <>
    <SectionWrapper>
    {/* About Section */}
    <motion.div
    whileHover={{
        scale: 1.03,
        rotateZ: 0.5, // subtle tilt
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="relative overflow-hidden rounded-xl border-2 p-2 border-gray-200 border-solid shadow-lg"
      >
    <div className="md:h-[70vh] h-[100vh] p-0 flex flex-col md:flex-row items-center md:justify-center md:gap-10 gap-2">
      <Image
        className="h-[12rem] w-[12rem] md:h-[25rem] md:w-[25rem]"
        src={AboutImg}
        alt="about"
      />
      <div className="flex flex-col items-center md:items-start md:gap-2  md:w-xl text-justify px-4">
        <h1 className="text-3xl md:text-5xl text-[#5b5bae] font-bold"><TitleAnimation title='About me.'></TitleAnimation></h1>
        <p className='text-sm text-justify  md:text-lg mb-4 md:mb-0'>
        {`I'm a software engineer and cinephile who builds frontend applications. My passion lies at the intersection of technology and visual storytelling. I constantly seek to deepen my computer science expertise. Every day is an opportunity to grow in this evolving digital landscape.
`}        </p>
        <button onClick={openResume} className="bg-[#5b5bae] p-2 text-white font-bold rounded-md shadow-lg cursor-pointer">
          View Resume
        </button>
      </div>
    </div>
</motion.div>
</SectionWrapper>

    <div className='md:mt-42 mt-45 mb-20 h-[60vh]' >
        <h1 className='text-[#5b5bae] text-4xl font-bold text-center'> My Skills</h1>
        <div className='flex flex-wrap  full gap-20 md:gap-30 p-4 mt-5 items-center justify-center'>
            {
                TechData.map((technology,index)=>{
                    return(
                    <div className='flex flex-col items-center shadow-2xl p-2 rounded-md cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out
                    ' key={index}>
                    <Image className='h-[8rem] w-[8rem]' src={technology.techImg} alt={technology.tech} />
                    <p className='text-[#5b5bae] font-bold'>{technology.tech}</p>
                    </div>
                    )
                })
            }
        </div>
    </div>  
  
   </>
  
  )
}

export default About
