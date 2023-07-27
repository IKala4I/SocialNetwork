import {getInstance, instanceWithApiKey} from "./axiosInstances"

const authAPI = {
    async getAuthMe() {
        const response = await getInstance.get(`auth/me`)
        return response.data
    },
    async logOut() {
        const response = await instanceWithApiKey.delete('auth/login')
        return response.data
    },
    async logIn(body) {
        const response = await instanceWithApiKey.post('auth/login', body)
        return response.data
    }
}

export default authAPI