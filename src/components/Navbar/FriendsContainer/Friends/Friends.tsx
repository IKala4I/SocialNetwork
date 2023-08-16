import classes from './Friends.module.css'
import Friend from './Friend/Friend'
import {UserType} from '../../../../redux/reducers/users-reducer/users-reducer'
import {FC} from 'react'

export type MapStateFriendsType = {
    friends: Array<UserType>
}

const Friends: FC<MapStateFriendsType> = ({friends}) => {
    const friendComponents = friends?.map(friend => <Friend friend={friend}/>)

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