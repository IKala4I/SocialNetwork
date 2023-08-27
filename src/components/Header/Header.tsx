import classes from './Header.module.css'
import {NavLink} from "react-router-dom"
import {FC} from 'react'
import {getIsAuth, getLogin} from "../../redux/selectors/auth-selectors";
import {useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../redux/redux-store";
import {logOut} from "../../redux/reducers/auth-reducer/auth-reducer";
import {Action} from "redux";

export const Header: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const login = useSelector(getLogin)
    const logOutHandler = () => {
        dispatch(logOut())
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