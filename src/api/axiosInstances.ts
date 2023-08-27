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
            'API-KEY': 'd63f8269-8980-4642-abf5-5e98f29d68f6'
        }
    }
)