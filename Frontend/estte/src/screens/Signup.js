import { useState, useRef } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BiSolidPencil } from "react-icons/bi";
import { signup } from '../store/actions/auth';
import ProfileImg from "../assets/images/profileDefaultIcon.jpg";
import Spinner from '../components/Spinner';

const SignUp = () => {
  const history = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const inputRef = useRef("");
  const [loading, setLoading] = useState(false)
  const [errorImg, setErrorImg] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [formData, setFormData] = useState({
    img: '',
    name: '',
    email: '',
    mobile: '',
    website: '',
    status: '',
    designation: '',
    address: [],
    expertise: '',
    description: '',
    password: '',
    password2: ''
  })

  const { img, name, email, mobile, website, status, designation, address, expertise, description, password, password2 } = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleImageChange = (e) => {
    var reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFormData({ ...formData, img: reader.result });
    };
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const onSubmit = e => {
    e.preventDefault()
    img?.length == 0 ? setErrorImg(true) : setErrorImg(false)
    password !== password2 ? setErrorPassword(true) : setErrorPassword(false)
    if (errorPassword || errorImg) {
      console.error("Please check you password or Image");
    } else {
      setLoading(true)
      dispatch(signup(formData, history))
    }
  }

  if (isAuthenticated) return <Navigate to="/" />


  return loading ? <Spinner /> : (
    <section className="flex flex-col p-10 items-center min-h-screen">
      <h1 className='text-black text-3xl'>Sign Up</h1>
      <p className="text-black text-xl my-3 ">
        Register Your Account
      </p>
      <form className='flex flex-col gap-6 mt-5 border border-[#C0C0C0] bg-gray-300 shadow-xl rounded-xl p-10' onSubmit={onSubmit} >
        <div className="relative w-48 mx-auto" onClick={handleImageClick}>
          <img
            src={img ? img : ProfileImg}
            alt="dp"
            className="h-44 w-44 rounded-full mx-auto overflow-hidden object-cover border-2 "
          />
          <div className="absolute right-0 bottom-2 bg-white rounded-full p-1 border-2">
            <BiSolidPencil style={{ fontSize: 35 }} />
          </div>
          <input
            type="file"
            onChange={handleImageChange}
            ref={inputRef}
            accept="image/png, image/jpeg"
            style={{ display: "none" }}
          />
        </div>
        {errorImg && <span className='ml-1 text-xs text-center text-red-600 font-semibold' >Please select an image</span>}
        <div className='flex justify-between' >
          <select className='rounded-2xl h-11 px-4 w-40 mr-2' value={status} onChange={onChange} name="status" required>
            <option value="">Status</option>
            <option value="owner">Owner</option>
            <option value="customer">Customer</option>
          </select>
        </div>
        <div>
          <input name='name' value={name} onChange={onChange} type="text" placeholder='Full Name' className='pr-5 pl-5 py-2 rounded-2xl mr-3' required />
          <input name='mobile' value={mobile} onChange={onChange} type="number" placeholder='Mobile Number' className='pr-5 pl-5 py-2 rounded-2xl' required />
        </div>

        <div>
          <input name='designation' value={designation} onChange={onChange} type="text" placeholder='Designation' className='pr-5 pl-5 py-2 rounded-2xl mr-3' required />
          <input name='expertise' value={expertise} onChange={onChange} type="text" placeholder='Expertise' className='pr-5 pl-5 py-2 rounded-2xl' required />
        </div>
        <input name='email' value={email} onChange={onChange} type="email" placeholder='Email' className='pr-5 pl-5 py-2 rounded-2xl' required />
        <input name='website' value={website} onChange={onChange} type="text" placeholder='Website' className='pr-5 pl-5 py-2 rounded-2xl' required />
        <input name='address' value={address} onChange={onChange} type="text" placeholder='Address' className='pr-5 pl-5 py-2 rounded-2xl' required />
        <textarea name='description' value={description} onChange={onChange} type="text" placeholder='About' className='pr-5 pl-5 py-2 rounded-2xl' required></textarea>
        <input name='password' value={password} onChange={onChange} type="password" placeholder='Password' className='pr-5 pl-5 py-2 rounded-2xl' required minLength={8} />
        <div className='flex flex-col space-y-1' >
          <input name='password2' value={password2} onChange={onChange} type="password" placeholder='Confirm Password' className='pr-5 pl-5 py-2 rounded-2xl' required />
          {errorPassword && <span className='ml-1 text-xs text-red-600 font-semibold' >Password do not match</span>}
        </div>
        <p className='text-gray-700'>Already a member?<span><Link className='text-blue-400' to="/signin"> Login</Link></span></p>
        <input type='submit' className='btn btn-primary bg-[#340E62] text-white py-2 mt-5 rounded-lg active:scale-95 duration-500' />
      </form>
    </section>
  )
}

export default SignUp
