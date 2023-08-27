import classes from './user.module.css'
import userPhoto from '../../../assets/images/user.png'
import {NavLink} from "react-router-dom"
import {follow, unfollow, UserType} from "../../../redux/reducers/users-reducer/users-reducer";
import {FC} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getIsAuth} from '../../../redux/selectors/auth-selectors'
import {getFollowingUsers} from '../../../redux/selectors/users-selectors'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../redux/redux-store'
import {Action} from 'redux'

type UserPropsType = {
    userInfo: UserType,
}
const User: FC<UserPropsType> = ({userInfo}) => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const followingUsers = useSelector(getFollowingUsers)

    const onFollow = () => {
        dispatch(follow(userInfo))
    }
    const onUnfollow = () => {
        dispatch(unfollow(userInfo.id))
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