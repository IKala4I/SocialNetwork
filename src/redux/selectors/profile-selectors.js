export const getProfile = (state) => {
    return state.profilePage.profile
}
export const getPosts = (state) => {
    return state.profilePage.posts
}
export const getIsProfileFetching = (state) => {
    return state.profilePage.isProfileFetching
}
export const getProfileStatus = (state) => {
    return state.profilePage.status
}