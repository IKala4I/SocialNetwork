import classes from './Header.module.css'
import {NavLink} from "react-router-dom"
import {FC} from 'react'

export type MapStateHeaderType = {
    isAuth: boolean,
    login: null | string
}

export type MapDispatchHeaderType = {
    logOut: () => void
}

const Header: FC<MapStateHeaderType & MapDispatchHeaderType> = ({isAuth, login, logOut}) => {

    const logOutHandler = () => {
        logOut()
    }

    return (
        <header className={classes.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207'
                alt='Header img'/>
            <div className={classes.loginBlock}>
                {isAuth ?
                    <div>
                        <div>
                            {login}
                        </div>
                        <div>
                            <button onClick={logOutHandler}>Log out</button>
                        </div>
                    </div> :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}

export default Header