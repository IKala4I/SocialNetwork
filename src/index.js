import ReactDOM from "react-dom/client";
import React from "react";
import state, {addPost, onPostTextChange, subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderApp = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} handleAddPost={addPost} onPostTextChange={onPostTextChange}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderApp()

subscribe(rerenderApp)