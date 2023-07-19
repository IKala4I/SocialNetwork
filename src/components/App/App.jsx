import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";
import ProfileContainer from "../ProfileContainer/ProfileContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
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
                </Routes>
            </div>
        </div>
    );
}

export default App;