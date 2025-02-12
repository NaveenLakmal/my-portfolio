import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'


const page = () => {
  return (
    <section className='container '>
      <Heading title="Creative Works"></Heading>
      <div className="">

        <div className="w-[300px] h-[200px]">
          <Image  src="/sample01.jpg" alt="sample" width={500} height={300}></Image>
          <div className="">Project title</div>
        </div>

        <div className="w-[300px] h-[200px]">
          <Image  src="/sample02.jpg" alt="sample" width={500} height={300}></Image>
          <div className="">Project title</div>
        </div>

        <div className="w-[300px] h-[300px]">
          <Image  src="/sample03.jpg" alt="sample" width={500} height={300}></Image>
          <div className="">Project title</div>
        </div>

        <div className="w-[300px] h-[300px]">
          <Image  src="/sample04.jpg" alt="sample" width={500} height={300}></Image>
          <div className="">Project title</div>
        </div>

      </div>
    </section>


  )
}

export default page