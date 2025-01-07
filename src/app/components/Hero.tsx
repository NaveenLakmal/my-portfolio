import React from 'react'
import Image from 'next/image'


import Button from './Button';


const Hero = () => {
    return (
        <div className=' h-screen bg-cover bg-center bg-fixed flex items-center bg-[#181c30] '>
            {/* <Image src="/baground.jpg" alt="Background" fill className="object-cover z-[-1]" priority /> */}

            <div className='flex flex-col sm:flex-row sm:gap-8 border border-lime-700 mt-40 sm:mt-0   '>
                <div className="container mx-auto px-4 border border-gray-300 my-8 sm:my-0">
                    <div className="max-w-[450px] text-white flex flex-col gap-[40px] border border-amber-500" >
                        <div>
                            <h1 className='text-5xl mt-4'>I&apos;m Naveen</h1>
                            <h4 className='text-2xl mt-2'>Fullstack Developer</h4>
                            <div className='bg-[#ffffff] h-[2px] w-[40px] mt-5'></div>


                        </div>

                        <div>
                            <p>In a Professional context it often happens that private clients corder a
                                publication  to be made.</p>
                            <Button link="#" text="learn More"></Button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center sm:ml-0 ">   
                    <Image
                        className="w-[300px] h-[300px] md:w-[42rem] md:h-[350px] lg:w-[800px] lg:h-[460px] border border-green-800 rounded-full object-cover"
                        src="/myphoto.jpg"
                        width={500}
                        height={500}
                        alt="about"
                    />
                </div>

            </div>
        </div>
    )
}

export default Hero