import friendsAPI from "../../../api/friendsAPI"
import {UserType} from '../users-reducer/users-reducer'
import {InferActionsTypes} from "../../redux-store";

type InitStateType = {
    friends: Array<UserType>
}

const initState: InitStateType = {
    friends: []
}

type ActionsType = InferActionsTypes<typeof sidebarActions>

const sidebarReducer = (state = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: [...state.friends, action.friend]
            }
        case 'REMOVE_FRIEND':
            return {
                ...state,
                friends: state.friends.filter(friend => friend.id !== action.friendId)
            }
        case 'SET_FRIENDS':
            return {
                ...state,
                friends: action.friends
            }
        default:
            return state
    }
}

//actionCreators
export const sidebarActions = {
    addFriend: (friend: UserType) => ({type: 'ADD_FRIEND', friend} as const),
    removeFriend: (friendId: number) => ({type: 'REMOVE_FRIEND', friendId} as const),
    setFriends: (friends: Array<UserType>) => ({type: 'SET_FRIENDS', friends} as const)
}
//thunks

export const requestFriends = () => async (dispatch: any) => {
    const data = await friendsAPI.getFriends()
    dispatch(sidebarActions.setFriends(data.items))
}

export default sidebarReducer