import {BaseThunkType, InferActionsTypes} from '../../redux-store'
import {chatAPI, ChatMessageAPIType} from '../../../api/chatAPI'
import {Dispatch} from 'redux'
import {v1} from 'uuid'

export type StatusType = 'pending' | 'ready' | 'error'
type ChatMessageType = ChatMessageAPIType & {id: string}

type InitStateType = {
    messages: ChatMessageType[]
    status: StatusType
}

const initialState: InitStateType = {
    messages: [],
    status: 'pending'
}

const chatReducer = (state = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "SET_MESSAGES":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case "SET_CHAT_STATUS":
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export const actions = {
    setMessages: (messages: ChatMessageAPIType[]) => ({
        type: 'SET_MESSAGES', payload: {messages}
    } as const),
    setStatus: (status: StatusType) => ({
        type: 'SET_CHAT_STATUS', payload: {status}
    } as const)
}

//thunks

let newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (newMessageHandler === null) {
        newMessageHandler = (messages) => {
            dispatch(actions.setMessages(messages))
        }
    }

    return newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(actions.setStatus(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))

}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
export default chatReducer