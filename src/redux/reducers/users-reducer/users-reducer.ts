import usersAPI from "../../../api/usersAPI"
import {sidebarActions} from "../sidebar-reducer/sidebar-reducer"
import {updateObjectInArray} from "../../../utils/object-helpers"
import {ResultCodes} from "../../../api/resultCodes";
import {BaseThunkType, InferActionsTypes} from "../../redux-store";

export type UserType = {
    id: number,
    name: string
    status: string
    photos: {
        small: string | null
        large: string | null
    }
    followed: boolean
}

export type FilterType = {
    term: string,
    friend: null | boolean
}

type InitStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: boolean
    followingUsers: Array<number>
    filter: FilterType
}

const initState: InitStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowing: false,
    followingUsers: [],
    filter: {
        term: '',
        friend: null
    }
}

type ActionsType = InferActionsTypes<typeof usersActions>

const usersReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case 'UPDATE_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE_IS_FOLLOWING':
            return {
                ...state,
                isFollowing: action.isFollowing,
                followingUsers: action.isFollowing
                    ? [...state.followingUsers, action.userId]
                    : state.followingUsers.filter(id => id !== action.userId)
            }
        case 'SET_FILTER':
            return {
                ...state, filter: action.payload
            }
        default:
            return state
    }
}

//actionCreators
export const usersActions = {
    followAction: (userId: number) => ({
        type: 'FOLLOW',
        userId
    } as const),
    unfollowAction: (userId: number) => ({
        type: 'UNFOLLOW',
        userId
    } as const),
    setUsers: (users: Array<UserType>) => ({
        type: 'SET_USERS',
        users
    } as const),
    setTotalUsersCount: (usersCount: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        usersCount
    } as const),
    updateCurrentPage: (pageNumber: number) => ({
        type: 'UPDATE_CURRENT_PAGE',
        pageNumber
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleIsFollowing: (isFollowing: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING',
        isFollowing,
        userId
    } as const),
    setFilter: (filter: FilterType) => ({
        type: 'SET_FILTER',
        payload: filter
    } as const)
}

//thunks

type SidebarActionsType = InferActionsTypes<typeof sidebarActions>

type ThunkType = BaseThunkType<ActionsType | SidebarActionsType>
export const requestUsers = (currentPage: number, pageSize: number, filter: FilterType): ThunkType => async (dispatch) => {
    dispatch(usersActions.updateCurrentPage(currentPage))
    dispatch(usersActions.toggleIsFetching(true))

    const data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)

    dispatch(usersActions.toggleIsFetching(false))
    dispatch(usersActions.setUsers(data.items))
    dispatch(usersActions.setTotalUsersCount(data.totalCount))
}

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFollowing(true, userId))

    const resultCode = await usersAPI.deleteFollowOnUser(userId)

    if (resultCode === ResultCodes.Success) {
        dispatch(sidebarActions.removeFriend(userId))
        dispatch(usersActions.unfollowAction(userId))
        dispatch(usersActions.toggleIsFollowing(false, userId))
    }
}
export const follow = (user: UserType): ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFollowing(true, user.id))

    const resultCode = await usersAPI.postFollowOnUser(user.id)

    if (resultCode === ResultCodes.Success) {
        dispatch(sidebarActions.addFriend(user))
        dispatch(usersActions.followAction(user.id))
        dispatch(usersActions.toggleIsFollowing(false, user.id))
    }
}

export default usersReducer