import estteApi from '../../api/estteApi'
import setAuthToken from '../../utils/setAuthToken'
import { AUTH_ERROR, FETCH_USER, LOGIN_SUCCESS } from '../types'


export const fetchUser = () => async dispatch => {
    if (localStorage.token) setAuthToken(localStorage.token)

    try {
        const response = await estteApi.get('/api/auth/')
        dispatch({ type: FETCH_USER, payload: response?.data })
    } catch (err) {
        dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.errors
        console.error(errors);
    }
}

export const login = ({ email, password }, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })
    try {
        const response = await estteApi.post('/api/auth/signin', body, config)
        localStorage.setItem('token', response?.data)
        dispatch({ type: LOGIN_SUCCESS, payload: response?.data })
        dispatch(fetchUser())
        history('/')
    } catch (err) {
        dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}

export const signup = ({ img, name, email, mobile, website, status, designation, address, expertise, description, password }, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ img, name, email, mobile, website, status, designation, address, expertise, description, password })
    try {
        const response = await estteApi.post('/api/auth/signup', body, config)
        localStorage.setItem('token', response?.data)
        dispatch({ type: LOGIN_SUCCESS, payload: response?.data })
        dispatch(fetchUser())
        history('/')
    } catch (err) {
        dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.errors
        console.error(errors);
    }
}
