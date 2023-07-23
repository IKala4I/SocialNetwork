import {getInstance} from "./axiosInstances";

const headerAPI = {
    getAuthMe() {
        return getInstance
            .get(`auth/me`)
            .then(response => response.data)
    }
}

export default headerAPI