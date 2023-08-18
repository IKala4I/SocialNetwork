import {getInstance} from "./axiosInstances"

const friendsAPI = {
    async getFriends() {
        const response = await getInstance.get(`users?friend=true`)
        return response.data
    }
}

export default friendsAPI