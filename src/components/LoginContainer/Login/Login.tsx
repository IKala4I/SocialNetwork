import {Navigate} from "react-router-dom"
import LoginForm from "./LoginForm/LoginForm"
import {LoginBodyType} from '../../../redux/reducers/auth-reducer/auth-reducer'
import {FC} from 'react'

export type MapStateLoginPropsType = {
    isAuth: boolean,
    captchaUrl: string | null
}

export type MapDispatchLoginPropsType = {
    logIn: (body: LoginBodyType) => void
}

const Login: FC<MapStateLoginPropsType & MapDispatchLoginPropsType> = ({isAuth, logIn, captchaUrl}) => {
    const onSubmit = (formData: LoginBodyType) => {
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