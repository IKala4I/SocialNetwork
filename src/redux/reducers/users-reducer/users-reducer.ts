import usersAPI from "../../../api/usersAPI"
import {addFriend, removeFriend} from "../sidebar-reducer/sidebar-reducer"
import {updateObjectInArray} from "../../../utils/object-helpers"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const UPDATE_CURRENT_PAGE = 'users/UPDATE-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING'

type InitStateType = {
    users: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: boolean
    followingUsers: any
}

const initState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: false,
    followingUsers: []
}

const usersReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFollowing,
                followingUsers: action.isFollowing
                    ? [...state.followingUsers, action.userId]
                    : state.followingUsers.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

//actions

type FollowActionType = {
    type: typeof FOLLOW,
    userId: number
}

type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: any
}

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    usersCount: number
}

type UpdateCurrentPageActionType = {
    type: typeof UPDATE_CURRENT_PAGE,
    pageNumber: number
}

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

type ToggleIsFollowingActionType = {
    type: typeof TOGGLE_IS_FOLLOWING,
    isFollowing: boolean,
    userId: number
}

export const followAction = (userId: number): FollowActionType => ({
    type: FOLLOW,
    userId
})
export const unfollowAction = (userId: number): UnfollowActionType => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users: any): SetUsersActionType => ({
    type: SET_USERS,
    users
})
export const setTotalUsersCount = (usersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
})
export const updateCurrentPage = (pageNumber: number): UpdateCurrentPageActionType => ({
    type: UPDATE_CURRENT_PAGE,
    pageNumber
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowing = (isFollowing: boolean, userId: number): ToggleIsFollowingActionType => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId
})


//thunks
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(updateCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))

    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userId))

    const resultCode = await usersAPI.deleteFollowOnUser(userId)

    if (resultCode === 0) {
        dispatch(removeFriend(userId))
        dispatch(unfollowAction(userId))
        dispatch(toggleIsFollowing(false, userId))
    }
}
export const follow = (userInfo: any) => async (dispatch: any) => {
    dispatch(toggleIsFollowing(true, userInfo.id))

    const resultCode = await usersAPI.postFollowOnUser(userInfo.id)

    if (resultCode === 0) {
        dispatch(addFriend(userInfo))
        dispatch(followAction(userInfo.id))
        dispatch(toggleIsFollowing(false, userInfo.id))
    }
}

export default usersReducer