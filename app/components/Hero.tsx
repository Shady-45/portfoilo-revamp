"use client";
import Typewriter from "typewriter-effect";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import HeroImg from '../../public/Hero.png'
const Hero = () => {
  return (
    <>
    <SectionWrapper>
  <main className="flex flex-col-reverse gap-10 md:flex-row items-center justify-center  w-full">
    {/* Text Section */}
    <div className="flex flex-col items-end gap-5 w-[30%] ">
      <div>
        <h1 className="text-4xl font-bold">{`Hi, I'm`}</h1>
        <h1 className="text-5xl font-extrabold">Rahul</h1>
      </div>

      <div className="relative z-auto text-4xl text-[#5b5bae] font-bold">
        <Typewriter
          options={{
            strings: ["Software Engineer", "Cinephile"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>

    {/* Image Section */}
    <div className="">
      <Image src={HeroImg} alt="hero" className="max-w-full h-[25rem] object-contain" />
    </div>
  </main>
</SectionWrapper>

    </>
  );
};

export default Hero;
