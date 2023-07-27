import './App.css'
import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "../UsersContainer/UsersContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import LoginPage from "../Login/Login";
import {Component, lazy, Suspense} from "react";
import {initializeApp} from "../../redux/reducers/app-reducer/app-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {getInitialized} from "../../redux/selectors/app-selectors";

const DialogsContainer = lazy(() => import('../DialogsContainer/DialogsContainer'));
const ProfileContainer = lazy(() => import('../ProfileContainer/ProfileContainer'));


class App extends Component {
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
                            element={<LoginPage/>}
                        />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: getInitialized(state)
    }
}
export default connect(mapStateToProps, {initializeApp})(App);