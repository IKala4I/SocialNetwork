import {UserType} from '../reducers/users-reducer/users-reducer'

export const getFriends = (state: any): Array<UserType> => {
    return state.sidebar.friends
}