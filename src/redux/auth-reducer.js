import authAPI from "../api/authAPI";

const SET_USER_DATA = 'SET-USER-DATA'
const TOGGLE_IS_AUTH = 'TOGGLE-IS-AUTH'

const initState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

//actionCreators
export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
});
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})

//thunks

export const getAuthMe = () => {
    return (dispatch) => {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}
export const logOut = () => {
    return (dispatch) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(setUserData(null, null, null, false))
            })
    }
}

export const logIn = (body) => {
    return (dispatch) => {
        authAPI.logIn(body)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthMe())
                }
            })
    }
}

export default authReducer;