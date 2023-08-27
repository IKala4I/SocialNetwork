import {Navigate} from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import {logIn, LoginBodyType} from '../../redux/reducers/auth-reducer/auth-reducer'
import {FC} from 'react'
import {getCaptchaURL, getIsAuth} from "../../redux/selectors/auth-selectors";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";
import {Action} from "redux";

const Login: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const captchaUrl = useSelector(getCaptchaURL)
    const onSubmit = (formData: LoginBodyType) => {
        dispatch(logIn(formData))
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