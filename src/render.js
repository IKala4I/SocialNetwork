import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderApp = (state, addPost, onPostTextChange) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} handleAddPost={addPost} onPostTextChange={onPostTextChange}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}