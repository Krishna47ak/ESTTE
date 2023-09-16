import { BiSolidStar } from 'react-icons/bi'

const InquiryCard = () => {
    return (
        <div className='w-[28rem] rounded-lg mb-5 border border-[#C0C0C0] p-5 hover:shadow-xl overflow-hidden' >
            <div className='flex justify-between' >
                <div className='flex items-center' >
                    <img className='h-14 mr-3' src={require("../assets/images/profileIcon.png")} />
                    <div>
                        <p className='text-lg font-semibold' >Mr. XYZ</p>
                        <p className='text-[#E36957]' >+91 9988786791</p>
                    </div>
                </div>
                <div className='flex items-start text-[#5CA500] font-semibold' >
                    <BiSolidStar className='mr-2 mt-1' />
                    <p>4.4</p>
                </div>
            </div>
            <p className='text-right text-[#919191] text-xs font-medium mt-4 mb-3' >Posted on 12/10/2023</p>
            <p className='text-sm font-medium text-justify' >
                The Property's location, size of the property, number of rooms or
                units, features and amenities, age of the property, condition of
                the property, and price. Also about the surrounding area, such as
                nearby schools, also the public transportation, shopping centres,
                and parks. Also about the lease terms, security deposits, and
                move in dates
            </p>
        </div>
    )
}

export default InquiryCard