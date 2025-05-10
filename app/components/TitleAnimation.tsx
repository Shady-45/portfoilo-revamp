"use client"
import React from 'react'
import {motion} from 'framer-motion'

interface TitleAnimationProps {
    title:string
}
const TitleAnimation:React.FC<TitleAnimationProps> = ({title}) => {
  return (
<div className="flex text-4xl font-bold">
      {title.split("").map((letter, i) => (
        <motion.span
          key={i}
          whileHover={{
            scale: [1, 1.4, 1],
            y: [0, -15, 0],
            color: ['#000', '#ff00ff', '#000'],
            transition: { 
              duration: 0.6,
              times: [0, 0.2, 1]
            }
          }}
          style={{ display: 'inline-block' }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
      );
  
}

export default TitleAnimation
