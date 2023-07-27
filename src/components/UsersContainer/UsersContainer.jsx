import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/reducers/users-reducer/users-reducer";
import {Component} from "react";
import Users from "./Users/Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage, getFollowingUsers,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";
import {getIsAuth} from "../../redux/selectors/auth-selectors";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => this.props.requestUsers(pageNumber, this.props.pageSize)

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
                />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingUsers: getFollowingUsers(state),
        isAuth: getIsAuth(state)
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers
})(UsersContainer);