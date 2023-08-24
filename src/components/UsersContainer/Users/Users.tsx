import User, {MapDispatchUserPropsType, MapStateUserPropsType} from "./User/User"
import Paginator from "../../common/Paginator/Paginator"
import {FilterType, UserType} from "../../../redux/reducers/users-reducer/users-reducer";
import {FC} from "react";
import {UsersSearchForm} from "../UsersSearchForm/UsersSearchForm";

type MapStateOwnUsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    users: Array<UserType>
}

type MapDispatchOwnUsersPropsType = {
    onPageChanged: (pageNumber: number) => void,
    onFilterChanged: (filter: FilterType) => void
}

export type MapDispatchUsersPropsType = MapDispatchOwnUsersPropsType & MapDispatchUserPropsType

export type MapStateUsersPropsType = MapStateUserPropsType & MapStateOwnUsersPropsType

const Users: FC<MapStateUsersPropsType & MapDispatchUsersPropsType> = (props) => {
    return (
        <div>
            <UsersSearchForm onFilterChanged={props.onFilterChanged}/>

            <div>
                <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                           totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} portionSize={10}/>
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