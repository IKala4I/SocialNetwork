import './App.css'
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/profile"); // Перенаправлення на /profile при завантаженні компонента App
    }, [navigate]);

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
