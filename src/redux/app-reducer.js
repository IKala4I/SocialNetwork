import {getAuthMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

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
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//thunks

export const initializeApp = () => {
    return (dispatch) => {
        dispatch(getAuthMe()).then(
            dispatch(initializedSuccess())
        )
    }
}

export default appReducer;