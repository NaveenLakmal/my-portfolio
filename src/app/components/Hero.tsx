import React from 'react'


import Button from './Button';


const Hero = () => {
    return (
        <div className=' h-screen bg-cover bg-center bg-fixed flex items-center bg-[#181c30] border border-gray-300'>
            {/* <Image src="/baground.jpg" alt="Background" fill className="object-cover z-[-1]" priority /> */}
            <div className='flex flex-col sm:flex-row gap-10'>
                <div className="container mx-auto px-4 border border-gray-300">
                    <div className="max-w-[450px] text-white flex flex-col gap-[40px] " >
                        <div>
                            <h1 className='text-5xl '>I&apos;m Naveen</h1>
                            <h4 className='text-2xl mt-3'></h4>
                            Fullstack Developer

                        </div>
                        <div className='bg-[#ffffff] h-[2px] w-[40px]'></div>
                        <div>
                            <p>In a Professional context it often happens that private clients corder a publication  to be made.</p>
                            <Button link="#" text="learn More"></Button>
                        </div>
                    </div>
                </div>

                {/* <div className='w-96 h-96 rounded-full bg-blue-500'> */}
                    {/* <img className="w-[340px] h-[360px]   border border-green-800" src="/about.jpg" alt="about" /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Hero