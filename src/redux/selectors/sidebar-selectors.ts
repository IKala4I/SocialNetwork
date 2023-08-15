import {UserType} from '../reducers/users-reducer/users-reducer'
import {AppStateType} from '../redux-store'

export const getFriends = (state: AppStateType): Array<UserType> => {
    return state.sidebar.friends
}