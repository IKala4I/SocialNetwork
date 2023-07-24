const SEND_MESSAGE = 'SEND-MESSAGE';

const initState = {
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

const dialogsReducer = (state = initState, action) => {
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
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;