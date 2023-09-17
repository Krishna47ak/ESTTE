import estteApi from '../../api/estteApi'
import { AUTH_ERROR } from '../types'
import { fetchUser } from './auth'

export const listProperty = ({ img, name, price, category, bedrooms, bathrooms }, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ img, name, price, category, bedrooms, bathrooms })
    try {
        await estteApi.post('/api/property', body, config)
        dispatch(fetchUser())
        history('/')
    } catch (err) {
        dispatch({ type: AUTH_ERROR })
        const errors = err?.response?.data?.error
        console.error(errors);
    }
}