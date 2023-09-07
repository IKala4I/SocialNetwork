import {ChatMessageType} from '../../../components/Chat/ChatPage'
import {BaseThunkType, InferActionsTypes} from '../../redux-store'
import {chatAPI} from '../../../api/chatAPI'
import {Dispatch} from 'redux'

type InitStateType = {
    messages: ChatMessageType[]
}

const initialState: InitStateType = {
    messages: []
}

const chatReducer = (state = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case "SET_MESSAGES":
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state
    }
}

export const actions = {
    setMessages: (messages: ChatMessageType[]) => ({
        type: 'SET_MESSAGES', payload: {messages}
    } as const)
}

//thunks

let newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (newMessageHandler === null) {
        newMessageHandler = (messages) => {
            dispatch(actions.setMessages(messages))
        }
    }

    return newMessageHandler
}

//let unsubscribe: () => void;

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
    //unsubscribe = chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.stop()
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    //unsubscribe()
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
export default chatReducer