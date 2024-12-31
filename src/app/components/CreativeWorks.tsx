import React from 'react'
import Heading from './Heading'

const CreativeWorks = () => {
  return (
    <section className='container mx-auto py-10 px-4'>
        <Heading title="Creative Works"></Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:px-16 px-6">
            <div className="row-span-2 relative group">
                <img src="/sample01.jpg" alt="" />
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project title</div>
            </div>
            <div className="row-span-2 relative group">
                <img src="/sample02.jpg" alt="" />
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project title</div>
            </div>
            <div className="row-span-2 relative group">
                <img src="/sample02.jpg" alt="" />
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project title</div>
            </div>
            <div className="row-span-2 relative group">
                <img src="/sample04.jpg" alt="" />
                <div className="bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white">Project title</div>
            </div>
        </div>
    </section>
  )
}

export default CreativeWorks