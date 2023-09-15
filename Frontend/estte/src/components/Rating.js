import { BiSolidStar } from 'react-icons/bi'

const Rating = ({ name }) => {
    return (
        <div className='flex items-center mb-3' >
            {Array(5).fill("").map((e, index) => <BiSolidStar key={index} className='text-[#5CA500]' />)}
            <p className='ml-2 text-[#919191] text-sm font-medium' >{name}</p>
        </div>
    )
}

export default Rating