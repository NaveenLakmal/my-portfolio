import React from 'react'

const Heading = ({ title }:{title:string}) => {
  return (
    <div className='text-[#ffffff] text-[32px] font-medium flex items-center gap-4 py-16'>{title}
    <div className='bg-[#ffffff] h-[2px] w-[40px] '></div>
    </div>
  )
}

export default Heading