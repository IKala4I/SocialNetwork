import classes from './Navbar.module.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.sidebarNav}>
            <div className={classes.item}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to='/dialogs'>Messages</Link>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;