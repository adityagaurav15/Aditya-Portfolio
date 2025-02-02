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
    
    <div className='w-full bg-red-500'>
      
      <nav className='flex w-3/5 fixed items-center justify-center z-50 px-5 lg:px-8 xl:px-[8%] py-4'>
           <ul className='md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 bg-gradient-to-r from-blue-50 via-red-50 to-yellow-50 '>
            <li><a href='#top' className='font-Ovo'>Home</a></li>
           <li><a href='#about' className='font-Ovo'>About Me</a></li>
          <li><a href='#work' className='font-Ovo'>My Work</a></li>
          <li><a href='#project' className='font-Ovo'>Project</a></li>
           <li><a href='#contact' className='font-Ovo'>Contact me</a></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
