import profileAPI from "../../../api/profileAPI"

const ADD_POST = 'profile/ADD-POST'
const SET_PROFILE = 'profile/SET-PROFILE'
const TOGGLE_IS_PROFILE_FETCHING = 'profile/TOGGLE-IS-PROFILE-FETCHING'
const SET_STATUS = 'profile/SET-STATUS'

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
    profile: null,
    isProfileFetching: false,
    status: ""
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//actionCreators

export const addPost = newPostText => ({type: ADD_POST, newPostText})
export const setProfile = profile => ({type: SET_PROFILE, profile})
export const toggleIsProfileFetching = isProfileFetching => ({type: TOGGLE_IS_PROFILE_FETCHING, isProfileFetching})
export const setStatus = status => ({type: SET_STATUS, status})

//thunks

export const getUserProfile = userId => async dispatch => {
    dispatch(toggleIsProfileFetching(true))

    const data = await profileAPI.getProfile(userId)

    dispatch(toggleIsProfileFetching(false))
    dispatch(setProfile(data))
}

export const getStatus = userId => async dispatch => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = status => async dispatch => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}


export default profileReducer