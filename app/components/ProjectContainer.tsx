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
      rotateZ: 0.5,
      transition: { type: 'spring', stiffness: 300 },
    }}
    className="relative overflow-hidden rounded-xl shadow-lg"
  >
    <article className="h-85 w-95 border-2 border-gray-200 rounded-lg shadow-2xl p-4">
      <div>
        <Image
          src={img}
          alt={projectTitle}
          className="w-full h-40 object-cover rounded-md mx-auto"
        />
      </div>
      
      <div className="flex items-center gap-2 mt-3">
        <h3 className="text-[#5b5bae] font-bold text-lg">{projectTitle}</h3>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="text-lg" />
        </a>
      </div>
  
      <p className="text-[#5b5bae] font-semibold mt-1">{projectDesc}</p>
  
      <p className="text-gray-600 font-semibold mt-2">
        <span className="text-black font-bold">Build Info: </span>
        {projectBuild.join(', ')}
      </p>
    </article>
  </motion.div>
  
  )
}

export default ProjectContainer
