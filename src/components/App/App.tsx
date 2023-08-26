import './App.css'
import Navbar from "../Navbar/Navbar"
import {Navigate, Route, Routes} from "react-router-dom"
import UsersContainer from "../UsersContainer/UsersContainer"
import HeaderContainer from "../HeaderContainer/HeaderContainer"
import {ComponentType, FC, lazy, Suspense, useEffect} from "react"
import {AppActionsType, initializeApp} from "../../redux/reducers/app-reducer/app-reducer"
import {useDispatch, useSelector} from "react-redux"
import Preloader from "../common/Preloader/Preloader"
import {getInitialized} from "../../redux/selectors/app-selectors"
import LoginContainer from "../LoginContainer/LoginContainer"
import {AppStateType} from '../../redux/redux-store'
import {ThunkDispatch} from "redux-thunk";

const DialogsContainer = lazy(() => import('../DialogsContainer/DialogsContainer') as Promise<{
    default: ComponentType<any>
}>)
const ProfileContainer = lazy(() => import('../ProfileContainer/ProfileContainer') as Promise<{
    default: ComponentType<any>
}>)

export const App: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, AppActionsType> = useDispatch()
    const initialized = useSelector(getInitialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized)
        return <Preloader/>

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to={"/profile"}/>}
                    />
                    <Route
                        path='/profile/:userID?'
                        element={
                            <Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </Suspense>}
                    />
                    <Route
                        path='/dialogs/*'
                        element={<Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </Suspense>}
                    />
                    <Route
                        path='/users'
                        element={<UsersContainer/>}
                    />
                    <Route
                        path='/login'
                        element={<LoginContainer/>}
                    />
                    <Route
                        path='*'
                        element={<div>404 NOT FOUND</div>}
                    />
                </Routes>
            </div>
        </div>
    )
}