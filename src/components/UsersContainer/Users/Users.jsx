import User from "./User/User";
import classes from './users.module.css'
import Paginator from "../../common/Paginator/Paginator";

function Users(props) {
    return (
        <div className='users'>
            <div>
                <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                           totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
            </div>
            {props.users.map(user => <User key={user.id}
                                           userInfo={user}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           followingUsers={props.followingUsers}
                                           isAuth={props.isAuth}
            />)}
        </div>
    )
}

export default Users