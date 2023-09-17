import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../store/actions/auth'

const AppLayout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout