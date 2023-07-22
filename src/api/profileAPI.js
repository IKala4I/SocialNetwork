import {getInstance} from "./axiosInstances";

const profileAPI = {
    getProfile(userID) {
        return getInstance
            .get(`profile/${userID}`)
            .then(response => response.data)
    }
}

export default profileAPI