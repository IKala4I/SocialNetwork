import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderApp = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderApp()

store.subscribe(rerenderApp)