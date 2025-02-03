import Image from 'next/image'
import React from 'react'
import {Assets} from "../../assets/asset.js"
import { RetroGrid } from "../../components/ui/retro-grid.jsx";
import { MorphingText } from "../../components/ui/morphing-text.jsx";
import { NeonGradientCard } from "../../components/ui/neon-gradient-card";

export function NeonGradientCardDemo() {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
        Neon Gradient Card
      </span>
    </NeonGradientCard>
  );
}


const Header = () => {
  return (
    // <div className='text-center flex flex-col items-center justify-center gap-4'>
    //     <h1 className='text-[110px] font-Poppins'>SOFTWARE </h1>
    //     <h1 className='text-[110px] font-Poppins -mt-16 text-gray-00'>DEVELOPER</h1>
    // </div>
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'> 
        <div>
            <Image src={Assets.Profile} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='text-xl md:text-2xl mb-3 font-Ovo'>Hi, I'm Aditya Gaurav</h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>frontend web developer</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>I am a frontend developer from Bangalore, India with 3.5 years of experience in 
            companies like Tata Consultancy Services
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href='#contact' className='px-10 py-3 border border-white rounded-full bg-black 
            text-white flex items-center gap-2'>Contact Me</a>
            <a href='/resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500
            flex items-center gap-2'>Resume</a>
        </div>
    </div>
   
    
  )
}

export default Header
