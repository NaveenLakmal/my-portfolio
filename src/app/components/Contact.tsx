import React from 'react'
import Heading from './Heading'

const Contact = () => {
    return (
        <section className='container mx-auto py-10 px-4 '>
            <Heading  title='Contact Us' />
            <form className='flex flex-col gap-8 lg:px-32 '>
                {/* <div className='border border-rose-700 px bg-green-500 border-2 border-gray-800 rounded-lg p-6 text-white blur-0'> */}
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
                    <input type="text" placeholder='Name' className='contactUsInput bg-[#414657]' required />
                    <input type="email" placeholder='email' className='contactUsInput bg-[#414657]' required />
                </div>
                <div>
                    <input type="text" placeholder='Subject' className='contactUsInput bg-[#414657]' required />
                </div>

                <textarea rows='6' placeholder='Message' className='contactUsInput bg-[#414657]' required></textarea>

                <div>
                    <button type='submit' className='btn '>Send Message</button>
                {/* </div> */}
                </div>
            </form>

        </section>
    )
}

export default Contact