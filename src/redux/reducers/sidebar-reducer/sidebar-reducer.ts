import friendsAPI from "../../../api/friendsAPI"

const ADD_FRIEND = 'sidebar/ADD-FRIEND'
const REMOVE_FRIEND = 'sidebar/REMOVE-FRIEND'
const SET_FRIENDS = 'sidebar/SET-FRIENDS'

type InitStateType = {
    friends: Array<any>
}

const initState: InitStateType = {
    friends: []
}

const sidebarReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.friend]
            }
        case
        REMOVE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter(friend => friend.id !== action.friendId)
            }
        case
        SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        default:
            return state
    }
}

//actionCreators

type AddFriendType = {
    type: typeof ADD_FRIEND,
    friend: any
}

type RemoveFriendType = {
    type: typeof REMOVE_FRIEND,
    friendId: number
}

type SetFriendsType = {
    type: typeof SET_FRIENDS,
    friends: any
}
export const addFriend = (friend: any): AddFriendType => ({type: ADD_FRIEND, friend})
export const removeFriend = (friendId: number): RemoveFriendType => ({type: REMOVE_FRIEND, friendId})
export const setFriends = (friends: any): SetFriendsType => ({type: SET_FRIENDS, friends})

//thunks

export const requestFriends = () => async (dispatch: any) => {
    const data = await friendsAPI.getFriends()
    dispatch(setFriends(data.items))
}

export default sidebarReducer