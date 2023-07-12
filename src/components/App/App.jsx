import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";

function App({store}) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={store.state.sideBar}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route
                        path='/profile'
                        element={<Profile store={store}/>}
                    />
                    <Route
                        path='/dialogs/*'
                        element={<Dialogs state={store.state.dialogsPage} dispatch={store.dispatch.bind(store)}/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;