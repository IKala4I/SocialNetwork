import {getInstance} from "./axiosInstances";

const friendsAPI = {
    getFriends() {
        return getInstance
            .get(`users?friend=true`)
            .then(response => response.data)
    }
}

export default friendsAPI