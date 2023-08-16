import {AppStateType} from '../redux-store'

export const getIsAuth = (state: AppStateType): boolean => {
    return state.auth.isAuth
}
export const getUserId = (state: AppStateType): number | null => {
    return state.auth.userId
}
export const getLogin = (state: AppStateType): string | null => {
    return state.auth.login
}
export const getCaptchaURL = (state: AppStateType): string | null => {
    return state.auth.captchaUrl
}
export const getEmail = (state: AppStateType): string | null => {
    return state.auth.email
}