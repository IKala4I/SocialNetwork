import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={classes.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207'
                alt='Header img'/>
            <div className={classes.loginBlock}>
                {props.isAuth ?
                    props.login :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    );
}

export default Header;