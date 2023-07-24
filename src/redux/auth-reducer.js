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
                ...action.data,
                isAuth: true
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
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const toggleIsAuth = (isAuth) => ({type: TOGGLE_IS_AUTH, isAuth})

//thunks

export const getAuthMe = () => {
    return (dispatch) => {
        authAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUserData(id, email, login));
                }
            })
    }
}
export const logOut = () => {
    return (dispatch) => {
        authAPI.logOut()
            .then(data => {
                if (data.resultCode === 0)
                    dispatch(toggleIsAuth(false))
            })
    }
}

export const logIn = (body) => {
    return (dispatch) => {
        authAPI.logIn(body)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthMe())
                } else {
                    alert('invalid data')
                }
            })
    }
}

export default authReducer;