import User from "./User/User";
import classes from './users.module.css'

function Users(props) {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []

    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)

    return (
        <div className='users'>
            <div>
                {pages.map(pageNumber =>
                    <span className={pageNumber === props.currentPage && classes.selectedPage}
                          onClick={
                              (e) => props.onPageChanged(pageNumber)}>{pageNumber}</span>)}
            </div>
            {props.users.map(user => <User key={user.id} userInfo={user}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           addFriend={props.addFriend}
                                           removeFriend={props.removeFriend}
                                           followingUsers={props.followingUsers}
                                           toggleIsFollowing={props.toggleIsFollowing}/>)}
        </div>
    )
}

export default Users