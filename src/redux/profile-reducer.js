const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_IS_PROFILE_FETCHING = 'TOGGLE-IS-PROFILE-FETCHING';

const initState = {
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
    newPostText: '',
    profile: null,
    isProfileFetching: false
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case TOGGLE_IS_PROFILE_FETCHING:
            return {
                ...state,
                isProfileFetching: action.isProfileFetching
            }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const toggleIsProfileFetching = (isProfileFetching) => ({type: TOGGLE_IS_PROFILE_FETCHING, isProfileFetching})

export default profileReducer;