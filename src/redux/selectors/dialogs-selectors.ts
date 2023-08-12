import {DialogType, MessageType} from '../reducers/dialogs-reducer/dialogs-reducer'

export const getDialogItems = (state: any): Array<DialogType> => {
    return state.dialogsPage.dialogItems
}
export const getMessages = (state: any): Array<MessageType> => {
    return state.dialogsPage.messages
}