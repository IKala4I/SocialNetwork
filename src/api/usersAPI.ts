import {getInstance, instanceWithApiKey} from "./axiosInstances"

const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await getInstance.get(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async postFollowOnUser(userID) {
        const response = await instanceWithApiKey.post(`follow/${userID}`)
        return response.data.resultCode
    },
    async deleteFollowOnUser(userID) {
        const response = await instanceWithApiKey.delete(`follow/${userID}`)
        return response.data.resultCode
    }
}

export default usersAPI