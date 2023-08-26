import {getAuthMe} from "../auth-reducer/auth-reducer"
import {BaseThunkType, InferActionsTypes} from "../../redux-store";

type InitStateType = {
    initialized: boolean
}

const initState: InitStateType = {
    initialized: false
}

export type AppActionsType = InferActionsTypes<typeof appActions>

const appReducer = (state = initState, action: AppActionsType): InitStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//actionCreators

export const appActions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}

//thunks

export const initializeApp = (): BaseThunkType<AppActionsType> => async (dispatch) => {
    await dispatch(getAuthMe())
    dispatch(appActions.initializedSuccess())
}

export default appReducer