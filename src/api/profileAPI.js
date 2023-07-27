import {getInstance, instanceWithApiKey} from "./axiosInstances"

const profileAPI = {
    async getProfile(userId) {
        const response = await getInstance.get(`profile/${userId}`)
        return response.data
    },
    getStatus(userId) {
        return getInstance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanceWithApiKey
            .put('/profile/status', {status})
    }
}

export default profileAPI