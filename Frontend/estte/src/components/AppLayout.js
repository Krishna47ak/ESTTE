import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Spinner from './Spinner'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../store/actions/auth'

const AppLayout = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading)

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <>
            <Header />
            {loading ? <Spinner /> : <Outlet />}
            <Footer />
        </>
    )
}

export default AppLayout