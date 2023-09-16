import { BiSolidStar } from 'react-icons/bi'

const MemberCard = () => {
    return (
        <div className='flex items-center mb-5' >
            <img className='h-14 mr-3 bg-[#E36957] rounded-full border-2 border-[#C0C0C0] py-1' src={require("../assets/images/memberProfile.png")} />
            <div>
                <p className='text-lg font-semibold' >Member name</p>
                <p className='text-xs font-semibold' >Property dealer</p>
                <div className='text-[#919191] text-xs mt-1 flex space-x-5' >
                    <div className='flex items-center' >
                        {Array(5).fill("").map((e, index) => <BiSolidStar key={index} className='text-[#5CA500]' />)}
                        <p className='ml-2' >5.0</p>
                    </div>
                    <p>725 Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard