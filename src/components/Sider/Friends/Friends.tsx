import classes from './Friends.module.css'
import Friend from './Friend/Friend'
import {FC, useEffect} from 'react'
import {getFriends} from '../../../redux/selectors/sidebar-selectors'
import {useDispatch, useSelector} from 'react-redux'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../redux/redux-store'
import {Action} from 'redux'
import {requestFriends} from '../../../redux/reducers/sidebar-reducer/sidebar-reducer'


const Friends: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const friends = useSelector(getFriends)

    useEffect(() => {
        dispatch(requestFriends())
    }, [])

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