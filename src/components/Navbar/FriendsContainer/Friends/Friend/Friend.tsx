import classes from './Friend.module.css'
import {NavLink} from "react-router-dom"
import defaultUserPhoto from '../../../../../assets/images/user.png'
import {FC} from 'react'
import {UserType} from '../../../../../redux/reducers/users-reducer/users-reducer'

type FriendPropsType = {
    friend: UserType
}

const Friend: FC<FriendPropsType> = ({friend}) => {
    return (
        <div className={classes.friend}>
            <div className={classes.avatar}>
                <img
                    src={friend.photos.small ? friend.photos.small : defaultUserPhoto}
                    alt='friend img'
                />
            </div>
            <div className={classes.name}>
                <NavLink to={`/dialogs/${friend.id}`}
                         className={({isActive}) =>
                             isActive ? `${classes.active}` : ""
                         }
                >
                    {friend.name}
                </NavLink>
            </div>
        </div>

    )
}

export default Friend