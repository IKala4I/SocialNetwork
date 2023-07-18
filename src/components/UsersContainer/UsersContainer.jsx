import {connect} from "react-redux";
import Users from "./Users/Users";
import {
    followActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator, updateCurrentPageActionCreator
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountActionCreator(usersCount))
        },
        updateCurrentPage: (pageNumber) => {
            dispatch(updateCurrentPageActionCreator(pageNumber))
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;