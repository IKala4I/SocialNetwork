import classes from './Friends.module.css'
import Friend from './Friend/Friend'
import {useContext} from "react";
import StoreContext from "../../../StoreContext";

function Friends() {
    const friends = useContext(StoreContext).getState().sidebar.friends
    const friendComponents = friends.map(friendData => <Friend data={friendData}/>)

    return (
        <div className={`${classes.item} ${classes.friends}`}>
            Friends
            <div className={classes.friendsWrapper}>
                {friendComponents}
            </div>
        </div>
    );
}

export default Friends;