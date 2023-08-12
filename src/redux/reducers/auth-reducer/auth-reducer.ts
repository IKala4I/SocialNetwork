import authAPI from "../../../api/authAPI"
import {stopSubmit} from "redux-form"
import {securityAPI} from "../../../api/securityAPI"

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'

const initState = {
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false as boolean,
    captchaUrl: null as (string | null)
}

type InitStateType = typeof initState

const authReducer = (state = initState, action: any): InitStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

type SetUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetUserDataActionPayloadType
}

//actionCreators
export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

//thunks

export const getAuthMe = () => async (dispatch: any) => {
    const data = await authAPI.getAuthMe()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const logOut = () => async (dispatch: any) => {
    const data = await authAPI.logOut()

    if (data.resultCode === 0)
        dispatch(setUserData(null, null, null, false))
}

type LoginBodyType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

export const logIn = (body: LoginBodyType) => async (dispatch: any) => {
    const data = await authAPI.logIn(body)

    if (data.resultCode === 0) {
        dispatch(getAuthMe())
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch:any) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer