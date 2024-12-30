import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

function NavBar() {
    return (
        <div className='bg-white fixed top-0 w-[100%] z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <div className="text-[24px]">Hello NavBar</div>
                <div className="hidden md:flex gap-6">
                    <a href="/" className='hover:text-[#ff4d41]'>Home</a>
                    <a href="/" className='hover:text-[#ff4d41]'>About</a>
                    <a href="/" className='hover:text-[#ff4d41]'>Portfolio</a>
                    <a href="/" className='hover:text-[#ff4d41]'>Blog</a>
                    <a href="/" className='hover:text-[#ff4d41]'>Contact</a>
                </div>
                <a href="#" className='hidden md:flex border border-[#ff4d41] px-4 py-1.5 text-[#ff4d41] rounded-[5px] items-center gap-2 hover:bg-[#ff4d41] hover:text-white transition duration-200'>Download CV <FaDownload/> </a>
            
             <div className="md:hidden text-[24px]" ><FiMenu/></div>
             </div>

        </div>
    )
}

export default NavBar