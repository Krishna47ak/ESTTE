import React from 'react'
import { BiPlus, BiSearch } from 'react-icons/bi'
import { MdLocationSearching } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between py-2 px-10 shadow-lg items-center select-none' >
            <p className='text-2xl' >ESTTE</p>
            <div className='flex space-x-4 items-center' >
                <div className='flex items-center' >
                    <div className='flex items-center bg-[#EDF2F7] border-y-2 border-s-2 text-[#340E62] border-[#E2E2E2] py-1 rounded-s-lg' >
                        <HiLocationMarker className='ml-5' />
                        <div className='h-5 w-[0.05rem] mx-5 bg-[#E2E2E2]' />
                        <input placeholder='Search for your Location' className='bg-[#EDF2F7] outline-none w-72 placeholder-[#BFC1C4]' />
                        <div className='bg-[#EDF2F7] mr-5' >
                            <MdLocationSearching />
                        </div>
                    </div>
                    <div className='bg-orange-600 active:bg-orange-800 py-2 px-5 rounded-e-lg' >
                        <BiSearch className='text-xl text-white cursor-pointer' />
                    </div>
                </div>
                <Link className='flex items-center px-2 py-2 text-sm text-[#340E62] hover:text-white hover:bg-[#340E62] font-semibold border border-[#E2E2E2] rounded-lg' >
                    <BiPlus className='pr-2 w-fit text-xl' />
                    <p>POST NEW</p>
                </Link>
                <Link className='bg-[#340E62] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:scale-105' >
                    <p>JOIN</p>
                </Link>
                <Link className='bg-[#340E62] text-white text-sm font-semibold px-6 py-2 rounded-lg hover:scale-105' >
                    <p>SIGN UP</p>
                </Link>
                <div>
                    <img className='h-4 cursor-pointer hover:scale-105' src={require("../assets/images/hamburgerIcon.png")} />
                </div>
            </div>
        </div>
    )
}

export default Header