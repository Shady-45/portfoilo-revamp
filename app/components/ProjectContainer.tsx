"use client"
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import {motion} from 'framer-motion'
type ProjectContainerProps = {
        img:StaticImageData,
        projectTitle:string,
        projectLink:string,
        projectDesc:string,
        projectBuild:string[]
}
const ProjectContainer:React.FC<ProjectContainerProps> = ({img,projectBuild,projectDesc,projectLink,projectTitle}) => {
  return (
    <motion.div
    whileHover={{
        scale: 1.03,
        rotateZ: 0.5, // subtle tilt
        transition: { type: 'spring', stiffness: 300 }
      }}
      className="relative overflow-hidden rounded-xl shadow-lg"
    >
    <article className='h-75 w-80 border-2 border-gray-200 border-solid rounded-lg shadow-2xl p-2'>
        <div>
          <Image src={img} alt={projectTitle} className='w-50 h-50 m-auto object-cover' />
        </div>
      <div className='flex gap-2 items-start'>
        <h3 className='text-[#5b5bae] font-bold text-lg'>{projectTitle}</h3>
        <a href={projectLink}>
        <FaExternalLinkAlt className='text-lg' />

        </a>
      </div>
      <p className='text-[@5b5bae] font-extrabold text-shadow-md'>{projectDesc}</p>
      <p className='text-gray-500 font-bold'><span className='text-black font-extrabold'>Build Info: </span>{projectBuild.join(', ')}</p>
    </article>

    </motion.div>
  )
}

export default ProjectContainer
