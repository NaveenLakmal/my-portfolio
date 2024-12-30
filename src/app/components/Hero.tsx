import React from 'react'
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import Button from './Button';


const Hero = () => {
    return (
        <div className='relative h-screen bg-cover bg-center bg-fixed flex items-center'>
            <Image src="/baground.jpg" alt="Background" fill className="object-cover z-[-1]" priority />
            <div className="container mx-auto px-4 ">
                <div className="max-w-[450px] text-white flex flex-col gap-[40px] " >
                    <div>
                        <h1 className='text-5xl '>I'm Naveen</h1>
                        <h4 className='text-2xl mt-3'></h4>
                       Fullstack Developer

                    </div>
                    <div className='bg-[#ff4d41] h-[2px] w-[40px]'></div>
                    <div>
                        <p>In a Professional context it often happens that private clients corder a publication  to be made.</p>
                        <Button link="#" text="learn More"></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero