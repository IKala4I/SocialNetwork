import {createSelector} from "reselect"
import {UserType} from '../reducers/users-reducer/users-reducer'
import {AppStateType} from '../redux-store'

const getUsersSelector = (state: AppStateType): Array<UserType> => {
    return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector,
    (users) => {
        //some difficult logic
        return users.filter(() => true)
    })
export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const getFollowingUsers = (state: AppStateType): Array<number> => {
    return state.usersPage.followingUsers
}