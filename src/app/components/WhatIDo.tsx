import React from 'react'
import Heading from './Heading'
import { RiLightbulbFlashLine } from 'react-icons/ri'

const WhatIDo = () => {
    return (
        <section className='container mx-auto py-10 px-4 border border-blue-800'>
            <Heading title="What I Do"></Heading>

            <div className="border border-blue-800 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
               
                <div className=" flex flex-col px-8 py-10 gap-4  bg-[#4f6cff] text-white box-border h-96 w-72 sm:h-auto sm:w-auto ">
                    <RiLightbulbFlashLine className='text-[28px] '></RiLightbulbFlashLine>
                    <h2 className='font-medium text-[20px]'>Lorem ipsum</h2>
                    <p className='text-[#414657]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi saepe optio ipsum similique iste sunt iusto architecto hic. Praesentium assumenda harum sit! Similique consequatur, ullam aliquid temporibus iste sed.</p>
                </div>

                <div className=" flex flex-col px-8 py-10 gap-4 bg-[#4f6cff] text-white box-border h-96 w-72 sm:h-auto sm:w-auto">
                    <RiLightbulbFlashLine className='text-[28px]'></RiLightbulbFlashLine>
                    <h2 className='font-medium text-[20px]'>Lorem ipsum</h2>
                    <p className='text-[#414657]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi saepe optio ipsum similique iste sunt iusto architecto hic. Praesentium assumenda harum sit! Similique consequatur, ullam aliquid temporibus iste sed.</p>
                </div>

                <div className="flex flex-col px-8 py-10 gap-4 bg-[#4f6cff] text-white box-border h-96 w-72 sm:h-auto sm:w-auto">
                    <RiLightbulbFlashLine className='text-[28px]'></RiLightbulbFlashLine>
                    <h2 className='font-medium text-[20px]'>Lorem ipsum</h2>
                    <p className='text-[#414657]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi saepe optio ipsum similique iste sunt iusto architecto hic. Praesentium assumenda harum sit! Similique consequatur, ullam aliquid temporibus iste sed.</p>
                </div>
                <div className="flex flex-col px-8 py-10 gap-4 bg-[#4f6cff] text-white h-96 w-72 sm:h-auto sm:w-auto">
                    <RiLightbulbFlashLine className='text-[28px]'></RiLightbulbFlashLine>
                    <h2 className='font-medium text-[20px]'>Lorem ipsum</h2>
                    <p className='text-[#414657]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi saepe optio ipsum similique iste sunt iusto architecto hic. Praesentium assumenda harum sit! Similique consequatur, ullam aliquid temporibus iste sed.</p>
                </div>

            </div>
        </section>
    )
}

export default WhatIDo