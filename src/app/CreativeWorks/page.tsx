import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'


const page = () => {
  return (
    <section className='container '>
      <Heading title="Creative Works"></Heading>
      <div className="">

        <div className="w-[300px] h-[200px]">
          <img src="/sample01.jpg" alt="" />
          <div className="">Project title</div>
        </div>

        <div className="w-[300px] h-[200px]">
          <img src="/sample02.jpg" alt="" />
          <div className="">Project title</div>
        </div>

        <div className="w-[300px] h-[300px]">
          <img src="/sample03.jpg" alt="" />
          <div className="">Project title</div>
        </div>

        <div className="w-[300px] h-[300px]">
          <img src="/sample04.jpg" alt="" />
          <div className="">Project title</div>
        </div>

      </div>
    </section>


  )
}

export default page