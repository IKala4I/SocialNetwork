import classes from './Friend.module.css'
import {NavLink} from "react-router-dom";

function Friend({data}) {
    return (
        <div className={classes.friend}>
            <div className={classes.avatar}>
                <img
                    src={data.image}
                    alt='friend img'
                />
            </div>
            <div className={classes.name}>
                <NavLink to={`/dialogs/${data.id}`}
                         className={({isActive}) =>
                             isActive ? `${classes.active}` : ""
                         }
                >
                    {data.name}
                </NavLink>
            </div>
        </div>
    );
}

export default Friend;