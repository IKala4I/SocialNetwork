import classes from './Friend.module.css'
import {NavLink} from "react-router-dom";
import defaultUserPhoto from '../../../../../assets/images/user.png'

function Friend({data}) {
    return (
        <div className={classes.friend}>
            <div className={classes.avatar}>
                <img
                    src={data.photos.small ? data.photos.small : defaultUserPhoto}
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