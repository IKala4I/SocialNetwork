import {rerenderApp} from "../render";

const state = {
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
        ]
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
}

window.state = state

export const addPost = (postMessage) => {
    const post = {
        id: state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(post)
    rerenderApp(state, addPost, onPostTextChange)
}

export const onPostTextChange = (value) => {
    state.profilePage.newPostText = value;
    rerenderApp(state, addPost, onPostTextChange)
}

export default state;