import Post from './Post/Post';
import {createRef} from "react";

const MyPosts = ({state, addPost, updateNewPostText}) => {
    const postComponents = state.posts.map(post => <Post id={post.id} message={post.message}
                                                                           likeCount={post.likesCount}/>);

    const messageBox = createRef();
    const onAddPost = () => {
      addPost()
    }

    const onPostTextChange = () => {
        const text = messageBox.current.value
        updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostTextChange} ref={messageBox} value={state.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;