import {getInstance, instanceWithApiKey} from "./axiosInstances"
import {UsersType} from "./friendsAPI";
import {CommonFieldsType} from "./authAPI";

type FollowOnUserType = {
    data: {}
}

const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        const response = await getInstance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
        return response.data
    },
    async postFollowOnUser(userId: number) {
        const response = await instanceWithApiKey.post<FollowOnUserType & CommonFieldsType>(`follow/${userId}`)
        return response.data.resultCode
    },
    async deleteFollowOnUser(userId: number) {
        const response = await instanceWithApiKey.delete<FollowOnUserType & CommonFieldsType>(`follow/${userId}`)
        return response.data.resultCode
    }
}

export default usersAPI