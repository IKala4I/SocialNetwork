import {getInstance, instanceWithApiKey} from "./axiosInstances";

const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return getInstance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    postFollowOnUser(userID) {
        return instanceWithApiKey
            .post(`follow/${userID}`)
            .then(response => response.data.resultCode)
    },
    deleteFollowOnUser(userID) {
        return instanceWithApiKey
            .delete(`follow/${userID}`)
            .then(response => response.data.resultCode)
    }
}

export default usersAPI