import MyPosts, {MapDispatchMyPostsType, MapStateMyPostsType} from "./MyPosts/MyPosts"
import {profileActions} from "../../../../redux/reducers/profile-reducer/profile-reducer"
import {connect} from "react-redux"
import {getPosts} from "../../../../redux/selectors/profile-selectors"
import {AppStateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: getPosts(state)
    }
}

const MyPostsContainer = connect<MapStateMyPostsType, MapDispatchMyPostsType, {}, AppStateType>(mapStateToProps, {
    addPost: profileActions.addPost
})(MyPosts)
export default MyPostsContainer