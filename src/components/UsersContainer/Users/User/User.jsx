import classes from './user.module.css'
import userPhoto from '../../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import usersAPI from "../../../../api/usersAPI";

function User({userInfo, follow, unfollow, addFriend, removeFriend}) {

    const onFollow = () => {
        usersAPI.postFollowOnUser(userInfo.id)
            .then(resultCode => {
                if (resultCode === 0) {
                    follow(userInfo.id)
                    addFriend(userInfo)
                }
            })
    }
    const onUnfollow = () => {
        usersAPI.deleteFollowOnUser(userInfo.id)
            .then(resultCode => {
                if (resultCode === 0) {
                    removeFriend(userInfo.id)
                    unfollow(userInfo.id)
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
            {userInfo.followed ? <button onClick={onUnfollow}>Unfollow</button> :
                <button onClick={onFollow}>Follow</button>}
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