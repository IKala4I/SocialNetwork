const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

type DialogType = {
    id: number,
    title: string
}

type MessageType = {
    id: number,
    message: string,
    sender: string,
    receiver: string
}

type InitStateType = {
    dialogItems: Array<DialogType>,
    messages: Array<MessageType>
}

const initState: InitStateType = {
    dialogItems: [
        {
            id: 1,
            title: 'Vladyslav'
        },
        {
            id: 2,
            title: 'Sasha'
        },
        {
            id: 3,
            title: 'Kate'
        },
        {
            id: 4,
            title: 'John'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hi, hru?',
            sender: 'Vladyslav',
            receiver: 'Kate'
        },
        {
            id: 2,
            message: 'Im glad to see you.',
            sender: 'Kate',
            receiver: 'Vladyslav'
        },
        {
            id: 3,
            message: 'Me too <3',
            sender: 'Vladyslav',
            receiver: 'Kate'
        },
    ]
}

const dialogsReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: state.messages.length + 1,
                    message: action.newMessageBody,
                    sender: 'Vladyslav',
                    receiver: 'Kate'
                }]
            }
        default:
            return state
    }
}

//action creators
type SendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}
export const sendMessage = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer