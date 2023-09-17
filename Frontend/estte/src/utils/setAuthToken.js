import estteApi from '../api/estteApi'

const setAuthToken = token => {
    if (token) {
        estteApi.defaults.headers.common['x-auth-token'] = token
    }else {
        delete estteApi.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken