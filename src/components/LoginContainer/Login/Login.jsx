import {Navigate} from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"

function Login({isAuth, logIn, captchaUrl}) {
    const onSubmit = (formData) => {
        logIn(formData)
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

export default Login