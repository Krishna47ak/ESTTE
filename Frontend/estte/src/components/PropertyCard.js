import React from 'react'

const PropertyCard = ({ rent }) => {
    return (
        <div className='w-80 rounded-lg border border-[#C0C0C0] hover:border-[#340E62] hover:shadow-xl overflow-hidden' >
            <div className='relative' >
                <label className='absolute text-white font-semibold text-sm bg-[#E36957] px-7 py-2' >{rent ? "RENT" : "SALE"}</label>
                <label className='absolute right-4 bottom-4 text-black font-medium text-xs bg-white rounded-lg px-2 py-1' >5Days ago</label>
                <div className='absolute bg-white p-2 rounded-full right-4 top-4 cursor-pointer' >
                    <img className='h-3' src={require("../assets/images/pin.png")} />
                </div>
                <img className='w-full' src={require("../assets/images/properties.png")} />
            </div>
            <div className='px-5' >
                <p className='font-bold my-3' >3C Lotus Boulevard Appartments</p>
                <p className='font-bold text-[#5CA500]' >&#8377; 5,555<span className='text-sm text-black font-normal' >/month</span></p>
                <div className='flex justify-between mt-3 mb-5 text-[#919191] font-semibold' >
                    <div className='flex items-center' >
                        <img className='h-6 bg-[#E9E2F1] p-1 rounded-full mr-2' src={require("../assets/images/location.png")} />
                        <p>25 Km</p>
                    </div>
                    <div className='flex items-center' >
                        <img className='h-6 bg-[#E9E2F1] p-1 rounded-full mr-2' src={require("../assets/images/bed.png")} />
                        <p>3 BD</p>
                    </div>
                    <div className='flex items-center' >
                        <img className='h-6 bg-[#E9E2F1] p-1 rounded-full mr-2' src={require("../assets/images/bathrrom.png")} />
                        <p>3 BA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard