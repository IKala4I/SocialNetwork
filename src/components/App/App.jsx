import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../DialogsContainer/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "../DialogsContainer/DialogsContainer";

function App({store}) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={store.getState().sidebar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/profile'
                        element={<Profile store={store}/>}
                    />
                    <Route
                        path='/dialogs/*'
                        element={<DialogsContainer store={store}/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;