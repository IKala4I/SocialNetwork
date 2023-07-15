import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
const mapStateToProps = (state) => {
    return {
        state: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            const addPostAction = addPostActionCreator()
            dispatch(addPostAction)
        },
        updateNewPostText: (text) => {
            const updatePostTextAction = updateNewPostTextActionCreator(text)
            dispatch(updatePostTextAction)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;