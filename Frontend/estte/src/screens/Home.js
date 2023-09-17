import { useEffect } from 'react'
import { BsThreeDots, BsArrowUpRight } from 'react-icons/bs'
import { BiPlus, BiSolidStar } from 'react-icons/bi'
import { HiLocationMarker } from 'react-icons/hi'
import buyerImg from '../assets/images/buyer.png'
import listingImg from '../assets/images/listing.png'
import relocationImg from '../assets/images/relocation.png'
import appraisalImg from '../assets/images/appraisal.png'
import Property from '../components/Property'
import InquiryCard from '../components/InquiryCard'
import ReviewCard from '../components/ReviewCard'
import MemberCard from '../components/MemberCard'
import ServiceCard from '../components/ServiceCard'
import { fetchUser } from '../store/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ServicingAreas = ["Noida Sector 57", "Noida Sector 100", "Golf Course", "Noida Electronic City", "Botanical Garden", "Noida Extension", "Noida Sector 74", "Indraprastha", "New Ashok Nagar", "Vrindavan Colony"];

const Home = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const user = auth?.user

  const sale = user?.properties?.filter((property) => property?.category === 'sale');
  const rent = user?.properties?.filter((property) => property?.category === 'rent');

  useEffect(() => {
    dispatch(fetchUser())
  }, [])

  if (!auth.isAuthenticated) return <Navigate to="/signup" />

  return (
    <div className='p-10' >
      <div className='flex space-x-5 ' >
        <div>
          <div className='border border-[#C0C0C0] rounded-xl w-full overflow-hidden' >
            <div className='relative' >
              <img className='w-full object-cover h-40' src={require("../assets/images/coverImage.jpg")} />
              <img className='absolute -bottom-[50%] left-6 h-32' src={user?.img} />
              <div className='absolute right-10 -bottom-16 flex space-x-5' >
                <div className='font-semibold border-2 border-[#959595] px-3 rounded-lg flex items-center cursor-pointer' >
                  <BsThreeDots className='text-3xl text-[#959595]' />
                </div>
                <div className='text-[#E36957] text-sm font-bold border-2 border-[#E36957] px-8 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-[#E36957]' >
                  <p>Hire me</p>
                </div>
                <div className='bg-[#E36957] text-white text-sm font-bold px-8 py-3 rounded-lg flex items-center cursor-pointer hover:bg-orange-700' >
                  <BiPlus />
                  <p>Follow</p>
                </div>
              </div>
            </div>
            <div className='pt-24 px-5 pb-5' >
              <p className='text-2xl font-bold first-letter:uppercase' >{user?.status}</p>
              <p className='text-lg font-semibold' >{user?.designation}</p>
              <div className='flex space-x-8 text-lg text-[#919191] font-semibold' >
                <p>1K+ Followers</p>
                <p>1.6K+ Contacts</p>
              </div>
              <div className='text-[#919191] flex space-x-5' >
                <div className='flex items-center' >
                  {Array(5).fill("").map((e, index) => <BiSolidStar key={index} className='text-[#5CA500]' />)}
                  <p className='ml-2' >5.0</p>
                </div>
                <p>725 Reviews</p>
              </div>
              <p className='text-[#919191] italic text-lg' >"Experience and expertise you can trust in the ever-changing world of real estate."</p>

              <div className='bg-[#C0C0C0] h-[0.05rem] w-full my-6 mb-8' />

              <div>
                <p className='text-2xl font-semibold mb-3' >About me</p>
                <p className='text-lg font-semibold' >{user?.expertise}</p>
                <p>{user?.description}.</p>
                <p className='mt-3' >We look forward to assisting you with your next move.</p>
              </div>

              <div className='bg-[#C0C0C0] h-[0.05rem] w-full my-6 mb-8' />

              <div>
                <p className='text-2xl font-semibold mb-3' >You can find me around</p>
                <div className='flex space-x-32' >
                  <div>
                    <p className='text-lg font-semibold mb-3' >Residence</p>
                    <div className='flex space-x-2 items-center' >
                      <HiLocationMarker className='text-[#340E62]' />
                      <p>{user?.address}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-lg font-semibold mb-3' >Native</p>
                    <div className='flex space-x-2 items-center' >
                      <HiLocationMarker className='text-[#340E62]' />
                      <p>{user?.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border border-[#C0C0C0] pt-5 px-5 rounded-xl w-full overflow-hidden mt-5' >
            <div className='flex items-center justify-between' >
              <p className='text-2xl font-semibold mb-3' >Services</p>
              <div className='flex items-center text-sm font-semibold space-x-10' >
                <p>Operating since: 2009</p>
                <p className='text-[#5CA500]' >On Estte since: 2023</p>
              </div>
            </div>
            <p>I specialise in the Commercial property management, the Luxury property management, the Affordable housing management, the
              Legal knowledge, Marketing and sales</p>

            <div className='bg-[#C0C0C0] h-[0.05rem] w-full my-6 mb-8' />

            <div className='flex items-center justify-between mb-3' >
              <p className='text-2xl font-semibold mb-3' >Servicing areas</p>
              <p className='font-semibold text-[#E36957] text-lg cursor-pointer' >view all</p>
            </div>
            <div className='flex flex-wrap justify-between mb-3' >
              {ServicingAreas?.map(area => (
                <div key={area} className='flex space-x-2 p-3 px-5 mb-3 items-center border border-[#C0C0C0] rounded-full' >
                  <HiLocationMarker className='text-[#340E62]' />
                  <p className='text-sm font-medium' >{area}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=' w-[44rem]' >

          <div className='border border-[#C0C0C0] p-5 rounded-lg' >
            <div className='flex items-center justify-between mb-5' >
              <p className='text-2xl font-semibold' >Our Team Members</p>
              <p className='font-semibold text-[#E36957] text-lg w-20 xl:w-fit cursor-pointer' >view all</p>
            </div>
            {Array(5).fill("").map((e, index) => <MemberCard key={index} />)}
          </div>

          <div className='border border-[#C0C0C0] p-5 rounded-lg mt-5' >
            <p className='text-2xl font-semibold' >Services</p>
            <div className='flex flex-wrap justify-between mt-5' >
              <ServiceCard img={buyerImg} title="Buyer's agent" />
              <ServiceCard img={listingImg} title="Listing agent" />
              <ServiceCard img={relocationImg} title="Relocation" />
              <ServiceCard img={appraisalImg} title="Appraisal" />
            </div>
            <div>
              <p className='text-2xl font-semibold mb-5' >Location</p>
              <div className='flex space-x-2 items-center' >
                <HiLocationMarker className='text-[#340E62]' />
                <p>{user?.address}</p>
              </div>
            </div>
            <div>
              <p className='text-2xl font-semibold my-5' >Email</p>
              <div className='flex space-x-2 items-center' >
                <img src={require("../assets/images/email.png")} className='h-3' />
                <p>{user?.email}</p>
                <BsArrowUpRight className='text-sm' />
              </div>
            </div>
            <div>
              <p className='text-2xl font-semibold my-5' >Website</p>
              <div className='flex space-x-2 items-center' >
                <img src={require("../assets/images/website.png")} className='h-3' />
                <p>{user?.website}</p>
                <BsArrowUpRight className='text-sm' />
              </div>
            </div>
            <div className='text-[#E36957] my-5 mt-[1.9rem] text-center text-sm font-bold border-2 border-[#E36957] px-8 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-[#E36957]' >
              <p>Add to contacts</p>
            </div>
            <div className='bg-[#E36957] mb-2 justify-center text-white text-sm font-semibold px-8 py-3 rounded-lg flex items-center cursor-pointer hover:bg-orange-700' >
              <p>Message</p>
            </div>
          </div>
        </div>

      </div>

      <Property title={"Properties for sale"} rent={false} />
      <Property title={"Properties for rent"} rent={true} />

      <div className='mt-5' >
        <div className='flex items-center justify-between mb-3' >
          <p className='text-2xl font-semibold mb-3' >My inquiries</p>
          <p className='font-semibold text-[#E36957] text-lg cursor-pointer' >view all</p>
        </div>
        <div className='flex flex-wrap justify-between' >
          <InquiryCard />
          <InquiryCard />
          <InquiryCard />
        </div>
      </div>

      <div className='mt-5' >
        <div className='flex items-center justify-between mb-3' >
          <p className='text-2xl font-semibold mb-3' >Ratings & Reviews</p>
          <p className='font-semibold text-[#E36957] text-lg cursor-pointer' >view all</p>
        </div>
        <div className='flex justify-end space-x-5' >
          <div className='relative select-none' >
            <div className='absolute text-xs left-3 top-4' >Filter by:</div>
            <select defaultValue="ALL" className="border border-[#C0C0C0] rounded-lg py-3 outline-none font-bold text-sm pl-14 px-10 " >
              <option value="ALL" >All</option>
              <option value="HIGH" >High</option>
              <option value="LOW" >Low</option>
            </select>
          </div>
          <div className='relative select-none' >
            <div className='absolute text-xs left-3 top-4' >Sorted by:</div>
            <select defaultValue="NEW" className="border border-[#C0C0C0] rounded-lg py-3 outline-none font-bold text-sm pl-16 px-8" >
              <option value="ALL" >All</option>
              <option value="NEW" >Newest</option>
              <option value="OLD" >Oldest</option>
            </select>
          </div>

        </div>
        <ReviewCard />
        <ReviewCard />
        <div className='text-[#E36957] text-center w-52 text-sm font-bold border-2 border-[#E36957] px-8 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-[#E36957] mt-10  mx-auto' >
          <p>VIEW ALL REVIEWS</p>
        </div>
      </div>
    </div>
  )
}

export default Home