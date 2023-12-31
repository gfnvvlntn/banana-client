import axios from "axios";


export const BASE_URL = `http://banana-everywhere.ru/api`

const api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originRequest._isRetry = true
        try {
            const response = await axios.get(`${BASE_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return api.request(originRequest)
        }catch (e) {}
    }

    throw error
} )

export default api
