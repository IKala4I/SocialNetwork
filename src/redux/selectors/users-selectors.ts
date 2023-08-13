import {createSelector} from "reselect"
import {UserType} from '../reducers/users-reducer/users-reducer'

const getUsersSelector = (state: any): Array<UserType> => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        //some difficult logic
        return users.filter(() => true)
    })
export const getPageSize = (state: any): number => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state: any): boolean => {
    return state.usersPage.isFetching
}
export const getTotalUsersCount = (state: any): number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: any): number => {
    return state.usersPage.currentPage
}
export const getFollowingUsers = (state: any): Array<number> => {
    return state.usersPage.followingUsers
}