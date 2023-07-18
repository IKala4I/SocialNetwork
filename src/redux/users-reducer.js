const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const UPDATE_CURRENT_PAGE = 'UPDATE-CURRENT-PAGE'

const initState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const followActionCreator = (userID) => ({
    type: FOLLOW,
    userID: userID
})
export const unfollowActionCreator = (userID) => ({
    type: UNFOLLOW,
    userID: userID
})
export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users: users
})
export const setTotalUsersCountActionCreator = (usersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
})
export const updateCurrentPageActionCreator = (pageNumber) => ({
    type: UPDATE_CURRENT_PAGE,
    pageNumber
})

export default usersReducer;