import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        //some difficult logic
        return users.filter(u => true);
    })
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getFollowingUsers = (state) => {
    return state.usersPage.followingUsers
}