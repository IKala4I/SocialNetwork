import {getAuthMe} from "../auth-reducer/auth-reducer"
import {BaseThunkType, InferActionsTypes} from "../../redux-store";

type InitStateType = {
    initialized: boolean
}

const initState: InitStateType = {
    initialized: false
}

type ActionsType = InferActionsTypes<typeof appActions>

const appReducer = (state = initState, action: ActionsType): InitStateType => {
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

export const initializeApp = (): BaseThunkType<ActionsType> => async (dispatch) => {
    await dispatch(getAuthMe())
    dispatch(appActions.initializedSuccess())
}

export default appReducer