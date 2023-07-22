import usersAPI from "../api/usersAPI";
import {addFriend, removeFriend} from "./sidebar-reducer";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const UPDATE_CURRENT_PAGE = 'UPDATE-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

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
                    if (user.id === action.userID)
                        return {...user, followed: true}
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID)
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
                    ? [...state.followingUsers, action.userID]
                    : state.followingUsers.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

//actions

export const followAction = (userID) => ({
    type: FOLLOW,
    userID: userID
})
export const unfollowAction = (userID) => ({
    type: UNFOLLOW,
    userID: userID
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})
export const setTotalUsersCount = (usersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
})
export const updateCurrentPage = (pageNumber) => ({
    type: UPDATE_CURRENT_PAGE,
    pageNumber
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowing = (isFollowing, userID) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userID
})


//thunks
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(updateCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        usersAPI.deleteFollowOnUser(userId)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(removeFriend(userId))
                    dispatch(unfollowAction(userId))
                    dispatch(toggleIsFollowing(false, userId))
                }
            })
    }
}
export const follow = (userInfo) => {
    return (dispatch) => {
        dispatch(toggleIsFollowing(true, userInfo.id))
        usersAPI.postFollowOnUser(userInfo.id)
            .then(resultCode => {
                if (resultCode === 0) {
                    dispatch(followAction(userInfo.id))
                    dispatch(addFriend(userInfo))
                    dispatch(toggleIsFollowing(false, userInfo.id))
                }
            })
    }
}

export default usersReducer;