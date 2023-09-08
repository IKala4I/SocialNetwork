import axios from "axios"

export const getInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})
export const instanceWithApiKey = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': 'a453dc5d-6fc4-4245-8c64-72de6ef85635'
        }
    }
)