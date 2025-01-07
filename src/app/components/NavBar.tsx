import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

function NavBar() {
    return (
        <div className='bg-[#181c30] fixed top-0 w-[100%]   bg-opacity-30 backdrop-blur-md p-1 '>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <div className="text-[22px] font-bold text-[#ffffff]">👾N Croft</div>
                <div className="hidden md:flex gap-6 text-[18px]">
                    <a href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Home</a>
                    <a href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>About</a>
                    <a href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Portfolio</a>
                    <a href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Blog</a>
                    <a href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Contact</a>
                </div>
                <a href="#" className='hidden md:flex border border-[#414657] px-4 py-1.5 text-[#414657] rounded-[5px] items-center gap-2 hover:bg-[#4f6cff] hover:text-white transition duration-200'>Download CV <FaDownload/> </a>
            
             <div className="md:hidden text-[24px]" ><FiMenu/></div>
             </div>

        </div>
    )
}

export default NavBar