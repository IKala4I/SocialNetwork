import usersAPI from "../../../api/usersAPI"
import {addFriend, removeFriend} from "../sidebar-reducer/sidebar-reducer"

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USERS = 'users/SET-USERS'
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT'
const UPDATE_CURRENT_PAGE = 'users/UPDATE-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING'

const initState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: false,
    followingUsers: []
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed: true}
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, followed: false}
                    return user
                })
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

export const followAction = userId => ({
    type: FOLLOW,
    userId
})
export const unfollowAction = userId => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = users => ({
    type: SET_USERS,
    users
})
export const setTotalUsersCount = usersCount => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
})
export const updateCurrentPage = pageNumber => ({
    type: UPDATE_CURRENT_PAGE,
    pageNumber
})
export const toggleIsFetching = isFetching => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowing = (isFollowing, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userId
})


//thunks
export const requestUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(updateCurrentPage(currentPage))
    dispatch(toggleIsFetching(true))

    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const unfollow = userId => async dispatch => {
    dispatch(toggleIsFollowing(true, userId))

    const resultCode = await usersAPI.deleteFollowOnUser(userId)

    if (resultCode === 0) {
        dispatch(removeFriend(userId))
        dispatch(unfollowAction(userId))
        dispatch(toggleIsFollowing(false, userId))
    }
}
export const follow = userInfo => async dispatch => {
    dispatch(toggleIsFollowing(true, userInfo.id))

    const resultCode = await usersAPI.postFollowOnUser(userInfo.id)

    if (resultCode === 0) {
        dispatch(addFriend(userInfo))
        dispatch(followAction(userInfo.id))
        dispatch(toggleIsFollowing(false, userInfo.id))
    }
}

export default usersReducer