import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../DialogsContainer/DialogsContainer";
import UsersContainer from "../UsersContainer/UsersContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/profile'
                        element={<Profile/>}
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