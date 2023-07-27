import friendsAPI from "../../../api/friendsAPI"

const ADD_FRIEND = 'sidebar/ADD-FRIEND'
const REMOVE_FRIEND = 'sidebar/REMOVE-FRIEND'
const SET_FRIENDS = 'sidebar/SET-FRIENDS'

const initState = {
    friends: []
}

const sidebarReducer = (state = initState, action) => {
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
                friends: state.friends.filter(friend => friend.id !== action.friendID)
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

export const addFriend = friend => ({type: ADD_FRIEND, friend})
export const removeFriend = friendID => ({type: REMOVE_FRIEND, friendID})
export const setFriends = friends => ({type: SET_FRIENDS, friends})

//thunks

export const requestFriends = () => async dispatch => {
    const data = await friendsAPI.getFriends()
    dispatch(setFriends(data.items))
}

export default sidebarReducer