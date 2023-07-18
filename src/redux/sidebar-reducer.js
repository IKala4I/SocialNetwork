const ADD_FRIEND = 'ADD-FRIEND'
const REMOVE_FRIEND = 'REMOVE-FRIEND'

const initState = {
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
    ],
}

const sidebarReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.friend]
            }
        case REMOVE_FRIEND:
            return {
                ...state,
                friends: state.friends.filter(friend => friend.id !== action.friendID)
            }
        default:
            return state
    }
}

export const addFriend = (friend) => ({type: ADD_FRIEND, friend})
export const removeFriend = (friendID) => ({type: REMOVE_FRIEND, friendID})

export default sidebarReducer;