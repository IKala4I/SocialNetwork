import axios from "axios";

export const getInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})
export const instanceWithApiKey = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '79ed8fa8-64c4-4222-b6ef-61a994ad5d31'
    }
})