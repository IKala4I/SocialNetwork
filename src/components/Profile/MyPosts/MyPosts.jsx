import Post from './Post/Post';
import {createRef} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = ({store, dispatch}) => {
    const postComponents = store.state.profilePage.posts.map(post => <Post id={post.id} message={post.message}
                                                                           likeCount={post.likesCount}/>);

    const messageBox = createRef();
    const addPost = () => {
        const addPostAction = addPostActionCreator()
        dispatch(addPostAction)
    }

    const onPostTextChange = () => {
        const updatePostTextAction = updateNewPostTextActionCreator(messageBox.current.value)
        dispatch(updatePostTextAction)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostTextChange} ref={messageBox} value={store.state.profilePage.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;