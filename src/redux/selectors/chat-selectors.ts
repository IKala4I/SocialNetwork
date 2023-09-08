import {AppStateType} from '../redux-store'

export const getChatMessages = (state: AppStateType) => {
    return state.chat.messages
}
export const getChatStatus = (state: AppStateType) => {
    return state.chat.status
}