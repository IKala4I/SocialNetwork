const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';


const store = {
    _subscriber() {
        console.log('I\'m subsriber')
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, How r u?',
                    likesCount: 5
                },
                {
                    id: 2,
                    message: 'It\'s my first post',
                    likesCount: 1
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            message: ''
        },
        sideBar: {
            friends: [
                {
                    id: 2,
                    image: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?size=626&ext=jpg',
                    name: 'Sasha'
                },
                {
                    id: 3,
                    image: 'https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?size=626&ext=jpg',
                    name: 'Kate'
                },
                {
                    id: 4,
                    image: 'https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
                    name: 'John'
                }
            ]
        }
    },

    get state() {
        return this._state
    },

    _addPost() {
        const post = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(post)
        this._state.profilePage.newPostText = ''
        this._subscriber()
    },

    _onPostTextChange(value) {
        this._state.profilePage.newPostText = value;
        this._subscriber()
    },

    _sendMessage() {
        const message = {
            id: this._state.dialogsPage.messages.length + 1,
            message: this._state.dialogsPage.messages.message,
            sender: 'Vladyslav',
            receiver: 'Kate'
        }
        this._state.dialogsPage.messages.push(message)
        this._state.dialogsPage.message = ''
        this._subscriber()
    },

    _onSendMessageChange(value) {
        this._state.dialogsPage.messages.message = value;
        this._subscriber()
    },

    dispatch(action) {
        if (action.type === ADD_POST)
            this._addPost()
        else if (action.type === UPDATE_POST_TEXT)
            this._onPostTextChange(action.newText)
        else if (action.type === SEND_MESSAGE)
            this._sendMessage()
        else if (action.type === UPDATE_MESSAGE_TEXT)
            this._onSendMessageChange(action.newText)
    },

    subscribe(observer) {
        this._subscriber = observer
    }
}
window.state = store._state

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateSendMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

export default store;