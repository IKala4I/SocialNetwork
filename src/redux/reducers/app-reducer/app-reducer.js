import {getAuthMe} from "../auth-reducer/auth-reducer"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initState = {
    initialized: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//actionCreators
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

//thunks

export const initializeApp = () => async dispatch => {
    await dispatch(getAuthMe())
    dispatch(initializedSuccess())
}

export default appReducer