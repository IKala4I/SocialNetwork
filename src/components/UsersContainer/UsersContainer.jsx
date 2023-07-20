import {connect} from "react-redux";
import {
    followActionCreator as follow,
    setTotalUsersCountActionCreator as setTotalUsersCount,
    setUsersActionCreator as setUsers, toggleIsFetchingActionCreator as toggleIsFetching, toggleIsFollowing,
    unfollowActionCreator as unfollow, updateCurrentPageActionCreator as updateCurrentPage
} from "../../redux/users-reducer";
import {Component} from "react";
import Users from "./Users/Users";
import Preloader from "../common/Preloader/Preloader";
import {addFriend, removeFriend} from "../../redux/sidebar-reducer";
import usersAPI from "../../api/usersAPI";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.updateCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
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
                                                               addFriend={this.props.addFriend}
                                                               removeFriend={this.props.removeFriend}
                                                               followingUsers={this.props.followingUsers}
                                                               toggleIsFollowing={this.props.toggleIsFollowing}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        friends: state.sidebar.friends,
        followingUsers: state.usersPage.followingUsers
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    updateCurrentPage,
    toggleIsFetching,
    toggleIsFollowing,
    addFriend,
    removeFriend
})(UsersContainer);