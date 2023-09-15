import React from 'react'
import PropertyCard from './PropertyCard'

const Property = ({ title, rent }) => {
    return (
        <div className='mt-10' >
            <div className='flex items-center justify-between mb-3' >
                <p className='text-2xl font-semibold mb-3' >{title}</p>
                <p className='font-semibold text-[#E36957] text-lg cursor-pointer' >view all</p>
            </div>
            <div className='flex flex-wrap justify-between' >
                <PropertyCard rent={rent} />
                <PropertyCard rent={rent} />
                <PropertyCard rent={rent} />
                <PropertyCard rent={rent} />
            </div>
        </div>
    )
}

export default Property