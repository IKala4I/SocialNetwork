import {getAuthMe} from "../auth-reducer/auth-reducer"

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

export type InitStateType = {
    initialized: boolean
}

const initState: InitStateType = {
    initialized: false
}

const appReducer = (state = initState, action: any): InitStateType => {
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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

//actionCreators
export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS})

//thunks

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getAuthMe())
    dispatch(initializedSuccess())
}

export default appReducer