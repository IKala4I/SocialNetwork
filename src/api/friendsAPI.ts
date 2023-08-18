import {getInstance} from "./axiosInstances"
import {UserType} from "../redux/reducers/users-reducer/users-reducer";

export type UsersType = {
    items: Array<UserType>,
    totalCount: number,
    error: string
}

const friendsAPI = {
    async getFriends() {
        const response = await getInstance.get<UsersType>(`users?friend=true`)
        return response.data
    }
}

export default friendsAPI