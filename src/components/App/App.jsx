import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App({state, handleAddPost, onPostTextChange}) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={state.sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/profile'
                        element={<Profile state={state.profilePage} handleAddPost={handleAddPost} onPostTextChange={onPostTextChange}/>}
                    />
                    <Route
                        path='/dialogs/*'
                        element={<Dialogs state={state.dialogsPage}/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;