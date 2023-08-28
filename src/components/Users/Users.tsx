import User from "./User/User"
import Paginator from "../common/Paginator/Paginator"
import {FilterType, requestUsers, usersActions} from "../../redux/reducers/users-reducer/users-reducer";
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
import {Action, Dispatch} from 'redux'
import Preloader from '../common/Preloader/Preloader'
import {useSearchParams} from 'react-router-dom'

type QueryParamsType = { term?: string; page?: string; friend?: string }

const Users: FC = () => {
    const thunkDispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()
    const actionDispatch: Dispatch = useDispatch()

    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const users = useSelector(getUsers)
    const filter = useSelector(getUsersFilter)
    const isFetching = useSelector(getIsFetching)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        let actualPage = currentPage
        let actualFilter = filter

        searchParams.forEach((value, key) => {
            if (key === 'page')
                actualPage = +value
            else if (key === 'friend') {
                const friendState = value === 'true'
                actualFilter = {...actualFilter, friend: friendState}
            } else if (key === 'term') {
                actualFilter = {...actualFilter, term: value}
            }
        })

        if (actualFilter !== filter)
            actionDispatch(usersActions.setFilter(actualFilter))

        thunkDispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (filter.term) query.term = filter.term
        if (filter.friend !== null) query.friend = String(filter.friend)
        if (currentPage !== 1) query.page = String(currentPage)

        setSearchParams(query, {replace: true})
    }, [filter, currentPage])
    const onPageChanged = (pageNumber: number) => {
        thunkDispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        thunkDispatch(requestUsers(1, pageSize, filter))
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