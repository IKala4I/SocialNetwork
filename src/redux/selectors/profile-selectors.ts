import {PostType} from '../reducers/profile-reducer/profile-reducer'

export const getProfile = (state: any): any => {
    return state.profilePage.profile
}
export const getPosts = (state: any): Array<PostType> => {
    return state.profilePage.posts
}
export const getIsProfileFetching = (state: any): boolean => {
    return state.profilePage.isProfileFetching
}
export const getProfileStatus = (state: any): string => {
    return state.profilePage.status
}