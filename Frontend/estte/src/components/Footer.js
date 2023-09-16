import { RxTwitterLogo, RxInstagramLogo } from 'react-icons/rx'
import { SlSocialLinkedin } from 'react-icons/sl'

const Footer = () => {
    return (
        <div className='bg-[#303030] p-10 text-white text-xl' >
            <div className='flex justify-between' >
                <p>ESTTE</p>
                <div className='flex items-end text-2xl space-x-5' >
                    <div className='hover:scale-105' >
                        <RxTwitterLogo />
                    </div>
                    <div className='hover:scale-105' >
                        <SlSocialLinkedin className='mb-[2px] text-xl' />
                    </div>
                    <div className='hover:scale-105' >
                        <RxInstagramLogo />
                    </div>
                </div>
            </div>
            <div className='bg-[#C0C0C0] h-[0.05rem] w-full my-6 mb-8' />
            <div className='flex items-center justify-between text-sm font-semibold' >
                <div className='flex items-center' >
                    <p>Privacy Policy</p>
                    <div className='h-5 w-[0.05rem] mx-5 bg-[#E2E2E2]' />
                    <p>Disclaimer</p>
                </div>
                <p>&copy; 2023 All Rights Reserved Estte Group</p>
            </div>
        </div>
    )
}


export default Footer