import profileAPI from "../../../api/profileAPI"
import {stopSubmit} from "redux-form"

const ADD_POST = 'profile/ADD-POST'
const SET_PROFILE = 'profile/SET-PROFILE'
const TOGGLE_IS_PROFILE_FETCHING = 'profile/TOGGLE-IS-PROFILE-FETCHING'
const SET_STATUS = 'profile/SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS'

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type PhotosType = {
    small: string,
    large: string
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe?: string
}

type InitStateType = {
    posts: Array<PostType>,
    profile: null | ProfileType,
    isProfileFetching: boolean,
    status: string
}

const initState: InitStateType = {
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

const profileReducer = (state = initState, action: any): InitStateType => {
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile as ProfileType, photos: action.photos}
            }
        default:
            return state
    }
}


//actionCreators

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

type SetProfileType = {
    type: typeof SET_PROFILE,
    profile: any
}

type ToggleIsProfileFetchingType = {
    type: typeof TOGGLE_IS_PROFILE_FETCHING,
    isProfileFetching: boolean
}

type SetStatusType = {
    type: typeof SET_STATUS,
    status: string
}

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: PhotosType
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText})
export const setProfile = (profile: ProfileType): SetProfileType => ({type: SET_PROFILE, profile})
export const toggleIsProfileFetching = (isProfileFetching: boolean): ToggleIsProfileFetchingType => ({
    type: TOGGLE_IS_PROFILE_FETCHING,
    isProfileFetching
})
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})

export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos})

//thunks

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    dispatch(toggleIsProfileFetching(true))

    const data = await profileAPI.getProfile(userId)

    dispatch(toggleIsProfileFetching(false))
    dispatch(setProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    const response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer