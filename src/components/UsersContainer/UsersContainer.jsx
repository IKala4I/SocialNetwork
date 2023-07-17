import {connect} from "react-redux";
import Users from "./Users/Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        follow:(userID)=>{
            dispatch(followActionCreator(userID))
        },
        unfollow:(userID)=>{
            dispatch(unfollowActionCreator(userID))
        },
        setUsers:(users)=>{
            const action = setUsersActionCreator(users)
            dispatch(action)
        }
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer;