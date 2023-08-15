import {PostType, ProfileType} from '../reducers/profile-reducer/profile-reducer'
import {AppStateType} from '../redux-store'

export const getProfile = (state: AppStateType): ProfileType | null => {
    return state.profilePage.profile
}
export const getPosts = (state: AppStateType): Array<PostType> => {
    return state.profilePage.posts
}
export const getIsProfileFetching = (state: AppStateType): boolean => {
    return state.profilePage.isProfileFetching
}
export const getProfileStatus = (state: AppStateType): string => {
    return state.profilePage.status
}