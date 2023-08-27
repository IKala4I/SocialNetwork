import profileAPI from "../../../api/profileAPI"
import {FormAction, stopSubmit} from "redux-form"
import {ResultCodes} from "../../../api/resultCodes";
import {BaseThunkType, InferActionsTypes} from "../../redux-store";

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

export type ProfileActionsType = InferActionsTypes<typeof profileActions>

const profileReducer = (state = initState, action: ProfileActionsType): InitStateType => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'TOGGLE_IS_PROFILE_FETCHING':
            return {
                ...state,
                isProfileFetching: action.isProfileFetching
            }
        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'SAVE_PHOTO_SUCCESS':
            return {
                ...state,
                profile: {...state.profile as ProfileType, photos: action.photos}
            }
        default:
            return state
    }
}


//actionCreators

export const profileActions = {
    addPost: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
    setProfile: (profile: ProfileType) => ({type: 'SET_PROFILE', profile} as const),
    toggleIsProfileFetching: (isProfileFetching: boolean) => ({
        type: 'TOGGLE_IS_PROFILE_FETCHING',
        isProfileFetching
    } as const),
    setStatus: (status: string) => ({type: 'SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}
//thunks

type ThunkType = BaseThunkType<ProfileActionsType | FormAction>
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    dispatch(profileActions.toggleIsProfileFetching(true))

    const data = await profileAPI.getProfile(userId)

    dispatch(profileActions.toggleIsProfileFetching(false))
    dispatch(profileActions.setProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(profileActions.setStatus(response.data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

    if (response.resultCode === ResultCodes.Success)
        dispatch(profileActions.setStatus(status))
}

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.resultCode === ResultCodes.Success) {
        dispatch(profileActions.savePhotoSuccess(response.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState: any) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === ResultCodes.Success) {
        await dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}

export default profileReducer