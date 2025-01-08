"use client";  // This marks the file as a Client Component
import Link from 'next/link';
import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
// import WhatIDo from "./components/WhatIDo";


function page() {

    const handleDownload = () => {
        // Path to your CV file in the `public` folder
        const fileUrl = "/my.pdf";

        // Create a temporary <a> element
        const link = document.createElement("a");
        link.href = fileUrl;

        // Set the download attribute with the desired file name
        link.download = "Naveen Lakmal cv.pdf";

        // Programmatically click the link
        document.body.appendChild(link);
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
    };



    return (
        <div className='bg-[#181c30] fixed top-0 w-[100%]   bg-opacity-30 backdrop-blur-md p-1 '>
            <div className='container mx-auto flex justify-between items-center py-4 px-4'>
                <div className="text-[22px] font-bold text-[#ffffff]"><Link href="/">👾N Croft</Link></div>
                <div className="hidden md:flex gap-6 text-[18px]">
                    <Link href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Home</Link>
                    <Link href="/About" className='hover:text-[#4f6cff] text-[#414657] font-bold'>About</Link>
                    <Link href="/" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Portfolio</Link>
                    <Link href="/WhatIDo" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Blog</Link>
                    <Link href="/Contact" className='hover:text-[#4f6cff] text-[#414657] font-bold'>Contact</Link>
                </div>
                <button
                    onClick={handleDownload}
                    className="hidden md:flex border border-[#414657] px-4 py-1.5 text-[#414657] rounded-[5px] items-center gap-2 hover:bg-[#4f6cff] hover:text-white transition duration-200"
                >Download Cv <FaDownload/></button>
                {/* <Link  onClick={handleDownload} className='hidden md:flex border border-[#414657] px-4 py-1.5 text-[#414657] rounded-[5px] items-center gap-2 hover:bg-[#4f6cff] hover:text-white transition duration-200'>Download CV <FaDownload/> </Link> */}

                <div className="md:hidden text-[24px]" ><FiMenu /></div>
            </div>

        </div>
    )
}

export default page