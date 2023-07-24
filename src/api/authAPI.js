import {getInstance, instanceWithApiKey} from "./axiosInstances";

const authAPI = {
    getAuthMe() {
        return getInstance
            .get(`auth/me`)
            .then(response => response.data)
    },
    logOut() {
        return instanceWithApiKey
            .delete('auth/login')
            .then(response => response.data)
    },
    logIn(body) {
        return instanceWithApiKey
            .post('auth/login', body)
            .then(response => response.data)
    }
}

export default authAPI