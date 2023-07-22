import './App.css'
import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import HeaderContainer from "../HeaderContainer/HeaderContainer";
import LoginPage from "../Login/Login";

function App() {
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

export default App;