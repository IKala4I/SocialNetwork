import MyPosts from "./MyPosts/MyPosts";
import {addPost} from "../../../../redux/reducers/profile-reducer/profile-reducer";
import {connect} from "react-redux";
import {getPosts} from "../../../../redux/selectors/profile-selectors";

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state)
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts)
export default MyPostsContainer;