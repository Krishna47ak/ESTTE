import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://estte-property.onrender.com/'
})

export default instance;