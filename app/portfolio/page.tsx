import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import Img from '../../public/tech/docker.png'
const Portfolio = () => {
  return (
    <>
      <main className='flex  flex-col items-center justify-center'>
        <h1 className='text-[#5b5bae] mt-[4rem] font-bold text-5xl'>My projects.</h1>
        <section className='mt-5 mb-10 flex gap-10 flex-wrap px-10 items-center justify-center'>
          <ProjectContainer
          img={Img}
          projectTitle='Portfolio'
          projectDesc='Portfolio website details'
          projectLink='../'
          projectBuild={['Next JS', 'Tailwind CSS']}
          />
          <ProjectContainer
          img={Img}
          projectTitle='Portfolio'
          projectDesc='Portfolio website details'
          projectLink='../'
          projectBuild={['Next JS', 'Tailwind CSS']}
          />
          <ProjectContainer
          img={Img}
          projectTitle='Portfolio'
          projectDesc='Portfolio website details'
          projectLink='../'
          projectBuild={['Next JS', 'Tailwind CSS']}
          />
          <ProjectContainer
          img={Img}
          projectTitle='Portfolio'
          projectDesc='Portfolio website details'
          projectLink='../'
          projectBuild={['Next JS', 'Tailwind CSS']}
          />
          
        </section>
      </main>
    </>
  )
}

export default Portfolio
