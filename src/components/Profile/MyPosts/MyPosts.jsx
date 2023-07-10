import Post from './Post/Post';
import {createRef} from "react";

const MyPosts = ({store}) => {
    const postComponents = store.state.profilePage.posts.map(post => <Post id={post.id} message={post.message}
                                                               likeCount={post.likesCount}/>);
t
    const messageBox = createRef();
    const addPost = () => {
        store.addPost()
        messageBox.current.value = ''
        store.onPostTextChange('')
    }

    const onPostTextChange = () => {
        store.onPostTextChange(messageBox.current.value)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostTextChange} ref={messageBox}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;