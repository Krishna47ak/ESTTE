import React from 'react'

const ServiceCard = ({img, title}) => {
    return (
        <div className='flex space-x-2 p-3 w-[9rem] xl:w-[9.5rem] justify-center mb-4 items-center border border-[#C0C0C0] rounded-full' >
            <img src={img} className='h-4' alt='icon' />
            <p className='text-sm font-medium' >{title}</p>
        </div>
    )
}

export default ServiceCard