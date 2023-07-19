import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator as addPost, updateNewPostTextActionCreator as updateNewPostText} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText
})(MyPosts)
export default MyPostsContainer;