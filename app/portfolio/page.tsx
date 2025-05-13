import React from 'react'
import ProjectContainer from '../components/ProjectContainer'
import BusinessImg from '../../public/business-card.jpg'
import CovidImg from '../../public/covid-info.jpg'
import PokemonImg from '../../public/pokemon.jpg'
import PortfolioImg from '../../public/portfolio.jpg'
import IndiecryptImg from '../../public/Indiecrypt.jpg'
import TitleAnimation from '../components/TitleAnimation'
const Portfolio = () => {
  return (
    <>
      <main className='flex  flex-col items-center justify-center'>
        <h1 className='text-[#5b5bae] mt-[4rem] font-bold text-3xl md:text-5xl'><TitleAnimation title='My Projects.'/></h1>
        <section className='mt-5 mb-10 flex gap-10 flex-wrap px-10 items-center justify-center'>
          <ProjectContainer
          img={BusinessImg}
          projectTitle='Business Card'
          projectDesc='simple way to generate a vCard'
          projectLink='https://getyourownvcard.netlify.app/'
          projectBuild={['Typescript','React JS', 'Tailwind CSS', 'Zustand']}
          />
          <ProjectContainer
          img={CovidImg}
          projectTitle='Covid Info'
          projectDesc='Info on Covid 19 across the word'
          projectLink='https://covid-info-three.vercel.app/'
          projectBuild={['React JS', 'Tailwind CSS','Redux-Toolkit']}
          />
          <ProjectContainer
          img={PokemonImg}
          projectTitle='Pokemon Book'
          projectDesc='Pokemon! Pokemon!'
          projectLink='https://pokemon-book-cq88bwa4u-shady-45.vercel.app/'
          projectBuild={['React JS', 'CSS']}
          />
          <ProjectContainer
          img={PortfolioImg}
          projectTitle='Portfolio'
          projectDesc='Portfolio website details'
          projectLink='https://portfoilo-revamp.vercel.app/'
          projectBuild={['Next JS', 'Tailwind CSS']}
          />
          <ProjectContainer
          img={IndiecryptImg}
          projectTitle='IndieCrypt'
          projectDesc='Decentralized shopping with Metamask (In Development)'
          projectLink='https://portfoilo-revamp.vercel.app/'
          projectBuild={['Next JS', 'Tailwind CSS','Meta Mask','Node JS','MySQL']}
          />
          
        </section>
      </main>
    </>
  )
}

export default Portfolio
