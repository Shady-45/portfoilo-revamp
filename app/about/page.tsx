import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Image from 'next/image'
import AboutImg from '../../public/About.png'
import { TechData } from '@/utils/_index'
const About = () => {
  return (
   <>
    <SectionWrapper>
    {/* About Section */}
    <div className="h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10">
      <Image
        className="h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem]"
        src={AboutImg}
        alt="about"
      />
      <div className="flex flex-col items-center md:items-start md:gap-2 w-xl text-justify px-4">
        <h1 className="text-5xl text-[#5b5bae] font-bold">About me.</h1>
        <p>
          I am a constantly evolving web developer passionate about designing captivating web solutions with great attention to detail. I also enjoy developing 2d games and applications for edutainment and gamification, blending creativity with technology.
        </p>
        <button className="bg-[#5b5bae] p-2 text-white font-bold rounded-md shadow-lg cursor-pointer">
          Download Resume
        </button>
      </div>
    </div>
  
  </SectionWrapper>

    <div className='mt-42 mb-20 h-[60vh]' >
        <h1 className='text-[#5b5bae] text-4xl font-bold text-center'> My Skills</h1>
        <div className='flex flex-wrap  full gap-40 p-4 mt-5 items-center justify-center'>
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
