import './App.css'
import Navbar from "../Navbar/Navbar"
import {Navigate, Route, Routes} from "react-router-dom"
import UsersContainer from "../UsersContainer/UsersContainer"
import HeaderContainer from "../HeaderContainer/HeaderContainer"
import {Component, lazy, Suspense} from "react"
import {initializeApp} from "../../redux/reducers/app-reducer/app-reducer"
import {connect, ConnectedProps} from "react-redux"
import Preloader from "../common/Preloader/Preloader"
import {getInitialized} from "../../redux/selectors/app-selectors"
import LoginContainer from "../LoginContainer/LoginContainer"
import {AppStateType} from '../../redux/redux-store'

const DialogsContainer = lazy(() => import('../DialogsContainer/DialogsContainer'))
const ProfileContainer = lazy(() => import('../ProfileContainer/ProfileContainer'))


class App extends Component<PropsFromRedux> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized)
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
}

const mapStateToProps = (state : AppStateType) => {
    return {
        initialized: getInitialized(state)
    }
}

const connector = connect(mapStateToProps, {initializeApp})
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(App)