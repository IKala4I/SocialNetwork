import classes from './user.module.css'
import userPhoto from '../../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import usersAPI from "../../../../api/usersAPI";

function User({userInfo, follow, unfollow, addFriend, removeFriend, followingUsers, toggleIsFollowing}) {

    const onFollow = () => {
        toggleIsFollowing(true, userInfo.id)
        usersAPI.postFollowOnUser(userInfo.id)
            .then(resultCode => {
                if (resultCode === 0) {
                    follow(userInfo.id)
                    addFriend(userInfo)
                    toggleIsFollowing(false, userInfo.id)
                }
            })
    }
    const onUnfollow = () => {
        toggleIsFollowing(true, userInfo.id)
        usersAPI.deleteFollowOnUser(userInfo.id)
            .then(resultCode => {
                if (resultCode === 0) {
                    removeFriend(userInfo.id)
                    unfollow(userInfo.id)
                    toggleIsFollowing(false, userInfo.id)
                }
            })
    }

    return (
        <div>
            <div className={classes.avatar}>
                <NavLink to={`/profile/${userInfo.id}`}>
                    <img src={userInfo.photos.small ? userInfo.photos.small : userPhoto} alt='user avatar'/>
                </NavLink>
            </div>
            {userInfo.followed ? <button disabled={followingUsers.some(id => id === userInfo.id)}
                                         onClick={onUnfollow}>Unfollow</button> :
                <button disabled={followingUsers.some(id => id === userInfo.id)} onClick={onFollow}>Follow</button>}
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

export default User;