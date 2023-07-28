import classes from './Friends.module.css'
import Friend from './Friend/Friend'

function Friends({friends}) {
    const friendComponents = friends?.map(friendData => <Friend data={friendData}/>)

    return (
        <div className={`${classes.item} ${classes.friends}`}>
            Friends
            <div className={classes.friendsWrapper}>
                {friendComponents}
            </div>
        </div>
    )
}

export default Friends