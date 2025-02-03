import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import {Assets} from "../../assets/asset.js"
 
const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const sideMenu = useRef()
    const onOpenMenu = () => {
        sideMenu.current.style.transform = 'translateX(-16rem)'
    }
    const onCloseMenu = () => {
        sideMenu.current.style.transform = 'translateX(16rem)'
    }

    
  return (
    <div className='w-full'>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
      ${true ? " bg-opacity-50 backdrop-blur-lg" : ""}`}> 
        <a href='#top'>
            <Image src={Assets.Logo} alt='' className='w-16 h-16 cursor-pointer mr-14 rounded-full' />
        </a>
        
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  shadow-sm bg-opacity-50 bg-gradient-to-r from-blue-50 via-red-50 to-yellow-50 '>
            <li><a href='#top' className='font-Ovo'>Home</a></li>
            <li><a href='#about' className='font-Ovo'>About Me</a></li>
            <li><a href='#work' className='font-Ovo'>My Work</a></li>
            <li><a href='#project' className='font-Ovo'>Project</a></li>
            <li><a href='#contact' className='font-Ovo'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <button onClick={() => setIsDarkMode(prev => !prev)}><Image src={isDarkMode ? Assets.Sun : Assets.Moon} alt='' className='w-6' /></button>

            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'> Contact</a>
            <button onClick={onOpenMenu} className='block md:hidden ml-3'>
                <Image src={Assets.Menu} alt='' className='w-6'/>
            </button>
        </div>
        {/* ******************* Mobile Menu ********************** */}

        <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 
        w-64 z-50 h-screen bg-gradient-to-r from-rose-50 via-red-50 to-yellow-50 transition duration-500'>
            
            <button onClick={onCloseMenu} className='absolute right-6 top-6'>
                <Image src={Assets.Cross} alt='' className='w-6' />
            </button>

            <li><a href='#top' onClick={onCloseMenu}  className='font-Ovo'>Home</a></li>
            <li><a href='#about' onClick={onCloseMenu}  className='font-Ovo'>About Me</a></li>
            <li><a href='#work' onClick={onCloseMenu}  className='font-Ovo'>My Work</a></li>
            <li><a href='#project' onClick={onCloseMenu}  className='font-Ovo'>Project</a></li>
            <li><a href='#contact' onClick={onCloseMenu}  className='font-Ovo'>Contact me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
