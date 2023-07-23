import {getInstance, instanceWithApiKey} from "./axiosInstances";

const profileAPI = {
    getProfile(userId) {
        return getInstance
            .get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId){
        return getInstance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instanceWithApiKey
            .put('/profile/status', {status})
    }
}

export default profileAPI