import React from 'react'
import Heading from './Heading'

const Contact = () => {
    return (
        <section className='container mx-auto py-10 px-4'>
            <Heading  title='Contact Us' />
            <form className='flex flex-col gap-8 lg:px-32'>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
                    <input type="text" placeholder='Name' className='contactUsInput' required />
                    <input type="email" placeholder='email' className='contactUsInput' required />
                </div>
                <div>
                    <input type="text" placeholder='Subject' className='contactUsInput' required />
                </div>

                <textarea rows='6' placeholder='Message' className='contactUsInput' required></textarea>

                <div>
                    <button type='submit' className='btn '>Send Message</button>
                </div>
            </form>

        </section>
    )
}

export default Contact