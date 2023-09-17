import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/actions/auth'
import Spinner from '../components/Spinner'

const SignIn = () => {
    const history = useNavigate()
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()

        setLoading(true)
        dispatch(login(formData, history))
    }

    if (isAuthenticated) return <Navigate to="/" />

    return loading ? <Spinner /> : (
        <section className="flex flex-col p-10 items-center min-h-screen">
            <h1 className='text-black text-3xl'>Sign In</h1>
            <p className="text-black text-xl my-3 ">
                Login to your Account
            </p>
            <form className='flex flex-col gap-6 mt-5 border border-[#C0C0C0] bg-gray-300 shadow-xl rounded-xl p-10 w-[34rem]' onSubmit={onSubmit} >

                <input name='email' value={email} onChange={onChange} type="email" placeholder='Email' className='pr-5 pl-5 py-2 rounded-2xl w-full' required />
                <input name='password' value={password} onChange={onChange} type="password" placeholder='Password' className='pr-5 pl-5 py-2 rounded-2xl w-full' required minLength={8} />

                <p className='text-gray-700'>Don't have an account?<span><Link className='text-blue-400' to="/signup"> Register</Link></span></p>
                <input type='submit' className='btn btn-primary bg-[#340E62] text-white py-2 mt-5 rounded-lg active:scale-95 duration-500' />
            </form>
        </section>
    )
}

export default SignIn
