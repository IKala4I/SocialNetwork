import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
            newMessageBody: ''
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._subscriber(this._state);
    },

    subscribe(observer) {
        this._subscriber = observer
    }
}
export default store;