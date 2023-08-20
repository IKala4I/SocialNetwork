import profileReducer from "./reducers/profile-reducer/profile-reducer"
import sidebarReducer from "./reducers/sidebar-reducer/sidebar-reducer"
import dialogsReducer from "./reducers/dialogs-reducer/dialogs-reducer"
import {applyMiddleware, combineReducers, createStore} from "redux"
import usersReducer from "./reducers/users-reducer/users-reducer"
import authReducer from "./reducers/auth-reducer/auth-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./reducers/app-reducer/app-reducer"

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

type RootReducer = typeof reducers
export type AppStateType = ReturnType<RootReducer>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
