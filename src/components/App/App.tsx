import './App.css'
import Navbar from "../Navbar/Navbar"
import {Navigate, Route, Routes} from "react-router-dom"
import {ComponentType, FC, lazy, Suspense, useEffect} from "react"
import {initializeApp} from "../../redux/reducers/app-reducer/app-reducer"
import {useDispatch, useSelector} from "react-redux"
import Preloader from "../common/Preloader/Preloader"
import {getInitialized} from "../../redux/selectors/app-selectors"
import {AppStateType} from '../../redux/redux-store'
import {ThunkDispatch} from 'redux-thunk'
import {Header} from '../Header/Header'
import {Action} from 'redux'
import Login from '../Login/Login'
import Users from '../Users/Users'

const DialogsContainer = lazy(() => import('../Dialogs/Dialogs') as Promise<{
    default: ComponentType<any>
}>)
const ProfileContainer = lazy(() => import('../ProfileContainer/ProfileContainer') as Promise<{
    default: ComponentType<any>
}>)

export const App: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
    const initialized = useSelector(getInitialized)

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized)
        return <Preloader/>

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to={"/profile"}/>}
                    />
                    <Route
                        path='/profile/:userId?'
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
                        element={<Users/>}
                    />
                    <Route
                        path='/login'
                        element={<Login/>}
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