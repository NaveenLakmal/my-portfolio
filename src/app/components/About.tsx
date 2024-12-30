import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
import { AiOutlineGift } from 'react-icons/ai'
import Button from './Button'


const About = () => {
  return (
    <section className="container mx-auto py-10 px-4">
      <Heading title="About Me"></Heading>

      {/* Main content container */}
      <div className="flex flex-col md:flex-row items-center sm:items-start gap-10 border border-blue-800">
        {/* Image container */}
        <div className="flex-shrink-0  sm:items-center border border-yellow-800 ">
          <img className="w-[340px] h-[360px]   border border-green-800" src="/about.jpg" alt="about" />
        </div>

        {/* Info container */}
        <div className="flex-grow border border-blue-800">
          {/* Grid container for info */}
          <div className="grid grid-cols-[auto,] gap-x-8 gap-y-4 justify-center sm:justify-start">
            {/* Row 1 */}
            <div className="flex items-center gap-4">
              <AiOutlineGift className="text-red-500" size={22} />
              <span className="font-medium">Birthday</span>
              <div className="flex items-center">:</div>
              <div className="flex items-center">2003/02/01</div>
            </div>


            {/* Row 2 */}
            <div className="flex items-center gap-4">
              <AiOutlineGift className="text-red-500" size={22} />
              <span className="font-medium ">Study</span>
              <div className="flex items-center ml-5">:</div>
              <div className="flex items-center ml-5">collage</div>
            </div>


            {/* Row 3 */}
            <div className="flex items-center gap-4">
              <AiOutlineGift className="text-red-500" size={22} />
              <span className="font-medium">Website</span>
              <div className="flex items-center">:</div>
              <div className="flex items-center">collage</div>
            </div>


            {/* Row 4 */}
            <div className="flex items-center gap-4">
              <AiOutlineGift className="text-red-500" size={22} />
              <span className="font-medium">Location</span>
              <div className="flex items-center">:</div>
              <div className="flex items-center">collage</div>
            </div>


            {/* Row 5 */}
            <div className="flex items-center gap-4">
              <AiOutlineGift className="text-red-500" size={22} />
              <span className="font-medium">Interest</span>
              <div className="flex items-center">:</div>
              <div className="flex items-center">collage</div>
            </div>



          </div>
          <div className="mt-8 ">
            <h2 className='font-bold mb-8 text-center sm:text-left'>I'm Naveen and Fullstack Developer</h2>
            <p className='text-gray-600 text-center sm:text-left'>Hi! My Name is Naveen Lakmal.I am Fullstack Developer,and I'm ver passionate and dedi my work.with 1 years experience as a professional</p>
            <div className="flex justify-center sm:justify-start"><Button link="#" text="Hire Me"></Button></div>
          </div>
         
            
          
        </div>
      </div>
    </section>
  )
}

export default About