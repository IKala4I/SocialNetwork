import headerAPI from "../api/headerAPI";

const SET_USER_DATA = 'SET-USER-DATA'

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
        default:
            return state
    }
}

//actionCreators
export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})

//thunks

export const getAuthMe = () => {
    return (dispatch) => {
        headerAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUserData(id, email, login));
                }
            })
    }
}

export default authReducer;