const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body, sender: 'Vladyslav', receiver: 'Kate'});
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;