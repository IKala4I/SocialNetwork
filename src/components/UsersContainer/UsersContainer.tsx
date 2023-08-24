import {connect, ConnectedProps} from "react-redux"
import {FilterType, follow, requestUsers, unfollow} from "../../redux/reducers/users-reducer/users-reducer"
import {Component} from "react"
import Users from "./Users/Users"
import Preloader from "../common/Preloader/Preloader"
import {
    getCurrentPage, getFollowingUsers,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter
} from "../../redux/selectors/users-selectors"
import {getIsAuth} from "../../redux/selectors/auth-selectors"
import {AppStateType} from "../../redux/redux-store";

class UsersContainer extends Component<PropsFromRedux> {
    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.requestUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               onPageChanged={this.onPageChanged}
                                                               users={this.props.users}
                                                               follow={this.props.follow}
                                                               unfollow={this.props.unfollow}
                                                               followingUsers={this.props.followingUsers}
                                                               isAuth={this.props.isAuth}
                                                               onFilterChanged={this.onFilterChanged}
                />}
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingUsers: getFollowingUsers(state),
        isAuth: getIsAuth(state),
        filter: getUsersFilter(state)
    }
}

const connector = connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers
})


type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(UsersContainer)

