import {createSelector} from "reselect"

const getUsersSelector = (state: any): any => {
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
export const getFollowingUsers = (state: any): any => {
    return state.usersPage.followingUsers
}