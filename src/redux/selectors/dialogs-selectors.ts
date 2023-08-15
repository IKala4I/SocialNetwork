import {DialogType, MessageType} from '../reducers/dialogs-reducer/dialogs-reducer'
import {AppStateType} from '../redux-store'

export const getDialogItems = (state: AppStateType): Array<DialogType> => {
    return state.dialogsPage.dialogItems
}
export const getMessages = (state: AppStateType): Array<MessageType> => {
    return state.dialogsPage.messages
}