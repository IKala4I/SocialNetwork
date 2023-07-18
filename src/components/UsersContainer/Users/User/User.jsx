import classes from './user.module.css'
import userPhoto from '../../../../assets/images/user.png'

function User({userInfo, follow, unfollow, addFriend, removeFriend}) {

    const onFollow = () => {
        follow(userInfo.id)
        addFriend({
            id: userInfo.id,
            image: userPhoto,
            name: userInfo.name,
        })
    }
    const onUnfollow = () => {
        removeFriend(userInfo.id)
        unfollow(userInfo.id)
    }

    return (
        <div>
            <div className={classes.avatar}>
                <img src={userInfo.photos.small ? userInfo.photos.small : userPhoto} alt='user avatar'/>
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