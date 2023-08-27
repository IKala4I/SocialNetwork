import User from "./User/User"
import Paginator from "../common/Paginator/Paginator"
import {FilterType, requestUsers} from "../../redux/reducers/users-reducer/users-reducer";
import {FC, useEffect} from "react";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from '../../redux/selectors/users-selectors'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../redux/redux-store'
import {Action} from 'redux'
import Preloader from '../common/Preloader/Preloader'

const Users: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsers)
    const filter = useSelector(getUsersFilter)
    const isFetching = useSelector(getIsFetching)

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])
    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    if (isFetching)
        return <Preloader/>

    return (
        <div>
            <h2>Users</h2>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>

            <div>
                <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
            </div>
            {users.map(user => <User key={user.id} userInfo={user}
            />)}
        </div>
    )
}

export default Users