import authAPI from "../../../api/authAPI"
import {FormAction, stopSubmit} from "redux-form"
import {securityAPI} from "../../../api/securityAPI"
import {CaptchaResultCode, ResultCodes} from "../../../api/resultCodes";
import {BaseThunkType, InferActionsTypes} from "../../redux-store";

const initState = {
    userId: null as (number | null),
    email: null as (string | null),
    login: null as (string | null),
    isAuth: false as boolean,
    captchaUrl: null as (string | null)
}

type InitStateType = typeof initState

export type AuthActionsType = InferActionsTypes<typeof authActions>

const authReducer = (state = initState, action: AuthActionsType): InitStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

//actionCreators

export const authActions = {
    setUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    } as const)
}

//thunks

type ThunkType = BaseThunkType<AuthActionsType | FormAction>

export const getAuthMe = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getAuthMe()

    if (data.resultCode === ResultCodes.Success) {
        let {id, login, email} = data.data
        dispatch(authActions.setUserData(id, email, login, true))
    }
}
export const logOut = (): ThunkType => async (dispatch) => {
    const data = await authAPI.logOut()

    if (data.resultCode === ResultCodes.Success)
        dispatch(authActions.setUserData(null, null, null, false))
}

export type LoginBodyType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}

export const logIn = (body: LoginBodyType): ThunkType => async (dispatch) => {
    const data = await authAPI.logIn(body)

    if (data.resultCode === ResultCodes.Success) {
        await dispatch(getAuthMe())
    } else {
        if (data.resultCode === CaptchaResultCode.CaptchaIsRequired) {
            await dispatch(getCaptchaUrl());
        }

        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(authActions.getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer