import MyPosts from "./MyPosts/MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {useContext} from "react";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    const store = useContext(StoreContext)
    const addPost = () => {
        const addPostAction = addPostActionCreator()
        store.dispatch(addPostAction)
    }

    const updateNewPostText = (text) => {
        const updatePostTextAction = updateNewPostTextActionCreator(text)
        store.dispatch(updatePostTextAction)
    }

    return (
        <MyPosts state={store.getState().profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>
    );
}

export default MyPostsContainer;