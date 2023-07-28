import ReactDOM from "react-dom/client"
import React from "react"
import {BrowserRouter} from "react-router-dom"
import App from "./components/App/App"
import store from "./redux/redux-store"
import {Provider} from "react-redux"
import * as serviceWorker from "./serviceWorker"

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
)

// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();