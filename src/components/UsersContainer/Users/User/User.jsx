import classes from './user.module.css'
import userPhoto from '../../../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

function User({userInfo, follow, unfollow, addFriend, removeFriend}) {

    const onFollow = () => {
        axios
            .post(`https://social-network.samuraijs.com/api/1.0/follow/${userInfo.id}`, {}, {
                withCredentials: true,
                headers: {
                    'API-KEY': '79ed8fa8-64c4-4222-b6ef-61a994ad5d31'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(userInfo.id)
                    addFriend(userInfo)
                }
            })
    }
    const onUnfollow = () => {
        axios
            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userInfo.id}`, {
                withCredentials: true,
                headers: {
                    'API-KEY': '79ed8fa8-64c4-4222-b6ef-61a994ad5d31'
                }
            })
            .then(response => {
                if (response.data.resultCode === 0) {
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