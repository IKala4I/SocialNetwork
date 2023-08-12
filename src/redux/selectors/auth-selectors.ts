export const getIsAuth = (state: any): boolean => {
    return state.auth.isAuth
}
export const getUserId = (state: any): number => {
    return state.auth.userId
}
export const getLogin = (state: any): string => {
    return state.auth.login
}
export const getEmail = (state: any): string => {
    return state.auth.email
}