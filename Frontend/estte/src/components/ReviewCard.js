import Rating from "./Rating"
import { BiSolidStar } from 'react-icons/bi'

const ReviewCard = ({ data }) => {
    return (
        <div>
            <div className='bg-[#C0C0C0] h-[0.05rem] w-full my-6 mb-8' />
            <div className='flex items-center justify-between mb-3' >
                <div className='flex items-center space-x-10' >
                    <p className='font-semibold text-xl' >Highly likely to recommend</p>
                    <div className='flex items-start text-[#5CA500] font-bold' >
                        <BiSolidStar className='mr-2 mt-1' />
                        <p>4.4</p>
                    </div>
                </div>
                <p className='font-semibold text-[#E36957] text-lg cursor-pointer' >Report a Problem</p>
            </div>
            <div className='flex items-center my-7' >
                <img className='h-14 mr-3' src={require("../assets/images/profileIcon.png")} alt="profile" />
                <div>
                    <p className='text-lg font-semibold' >Mr. {data?.name}</p>
                    <p className='text-[#E36957]' >+91 {data?.mobile}</p>
                </div>
            </div>
            <p className='mb-5' >Sold a Multiple Occupancy home in 2023 in Ridgewood, Ridgewood, NY.</p>
            <Rating name={"Local knowledge"} />
            <Rating name={"Process expertise"} />
            <Rating name={"Responsiveness"} />
            <p>
                The Property's location, size of the property, number of rooms or units, features and amenities, age of the property, condition of the property, and price. Also about the surrounding area, such as nearby
                schools, also the public transportation, shopping centres, and parks. Also about the lease terms, security deposits, and move in dates. Also about the surrounding area. The Property's location, size of
                the property, number of rooms or units, features and amenities, age of the property, condition of the property, and price. Also about the surrounding area, such as nearby schools, also the public
                transportation, shopping centres, and parks.
            </p>
        </div>
    )
}

export default ReviewCard