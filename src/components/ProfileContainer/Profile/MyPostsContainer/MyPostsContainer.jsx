import MyPosts from "./MyPosts/MyPosts";
import {addPost} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {
    addPost
})(MyPosts)
export default MyPostsContainer;