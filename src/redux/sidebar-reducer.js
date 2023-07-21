const ADD_FRIEND = 'ADD-FRIEND'
const REMOVE_FRIEND = 'REMOVE-FRIEND'
const SET_FRIENDS = 'SET-FRIENDS'

const initState = {
    friends: [],
}

const sidebarReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends,
                    {...action.friend, followed: true}
                ]
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

export const addFriend = (friend) => ({type: ADD_FRIEND, friend})
export const removeFriend = (friendID) => ({type: REMOVE_FRIEND, friendID})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})

export default sidebarReducer;