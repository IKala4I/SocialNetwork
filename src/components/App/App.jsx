import './App.css'
import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import LoginPage from "../Login/Login";
import {Component} from "react";
import {initializeApp} from "../../redux/reducers/app-reducer/app-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {getInitialized} from "../../redux/selectors/app-selectors";

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
                            element={<ProfileContainer/>}
                        />
                        <Route
                            path='/dialogs/*'
                            element={<DialogsContainer/>}
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