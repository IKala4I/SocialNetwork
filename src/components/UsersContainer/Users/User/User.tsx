import classes from './user.module.css'
import userPhoto from '../../../../assets/images/user.png'
import {NavLink} from "react-router-dom"
import {UserType} from "../../../../redux/reducers/users-reducer/users-reducer";
import {FC} from "react";

export type MapStateUserPropsType = {
    followingUsers: Array<number>,
    isAuth: boolean
}

export type MapDispatchUserPropsType = {
    follow: (user: UserType) => void,
    unfollow: (userId: number) => void
}

type MapStateOwnUserPropsType = {
    userInfo: UserType,
}
const User: FC<MapStateUserPropsType & MapDispatchUserPropsType & MapStateOwnUserPropsType> = ({
                                                                                                   userInfo,
                                                                                                   follow,
                                                                                                   unfollow,
                                                                                                   followingUsers,
                                                                                                   isAuth
                                                                                               }) => {
    const onFollow = () => {
        follow(userInfo)
    }
    const onUnfollow = () => {
        unfollow(userInfo.id)
    }

    return (
        <div>
            <div className={classes.avatar}>
                <NavLink to={`/profile/${userInfo.id}`}>
                    <img src={userInfo.photos.small ? userInfo.photos.small : userPhoto} alt='user avatar'/>
                </NavLink>
            </div>
            {userInfo.followed ?
                <button disabled={followingUsers.some(id => id === userInfo.id) || !isAuth}
                        onClick={onUnfollow}>Unfollow
                </button>
                :
                <button disabled={followingUsers.some(id => id === userInfo.id) || !isAuth}
                        onClick={onFollow}>Follow
                </button>}
            <div>
                <span>{userInfo.name}</span>
            </div>
            <div>
                <span>{userInfo.status}</span>
            </div>
            <div>
                <div>
                    <span>Kiev</span>
                </div>
                <div>
                    <span>Ukraine</span>
                </div>
            </div>
        </div>
    )
}

export default User