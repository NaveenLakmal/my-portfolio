import React from 'react'


const Footer = () => {
  return (
    <div className="bg-[url('/footer02.jpg')] bg-cover bg-center h-[200px] text-white grid place-items-center">
         {/* <Image src="/footer.jpg" alt="Backgrund" fill className="object-cover z-[-1]" priority /> */}
        <div className="text-center">
            <p>Created By Naveen Lakmal</p>
            <p>&copy; 2025 N Croft</p>
        </div>
    </div>
  )
}

export default Footer