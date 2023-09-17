import React, { useState } from 'react'
import PropertyCard from './PropertyCard'

const Property = ({ title, data }) => {
    const [isView, setIsView] = useState(false)

    return data?.length > 0 && (
        <div className='mt-10' >
            <div className='flex items-center justify-between mb-3' >
                <p className='text-2xl font-semibold mb-3' >{title}</p>
                <p onClick={() => setIsView(!isView)} className='font-semibold text-[#E36957] text-lg cursor-pointer' >{isView ? 'view less' : 'view all'}</p>
            </div>
            <div className='flex flex-wrap justify-between' >
                {isView ? (
                    data?.map((e, index) => <PropertyCard key={index} data={data[index]} />)
                ) : (
                    Array(4).fill("").map((e, index) => data[index] && <PropertyCard key={index} data={data[index]} />)
                )}
            </div>
        </div>
    )
}

export default Property