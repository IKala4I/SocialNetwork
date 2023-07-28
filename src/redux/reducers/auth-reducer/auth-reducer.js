import authAPI from "../../../api/authAPI"
import {stopSubmit} from "redux-form"
import {securityAPI} from "../../../api/securityAPI"

const SET_USER_DATA = 'auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET-CAPTCHA-URL-SUCCESS'

const initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initState, action) => {
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

//actionCreators
export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
})

export const getCaptchaUrlSuccess = captchaUrl => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
})

//thunks

export const getAuthMe = () => async dispatch => {
    const data = await authAPI.getAuthMe()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const logOut = () => async dispatch => {
    const data = await authAPI.logOut()

    if (data.resultCode === 0)
        dispatch(setUserData(null, null, null, false))
}

export const logIn = body => async dispatch => {
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

export const getCaptchaUrl = () => async dispatch => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export default authReducer