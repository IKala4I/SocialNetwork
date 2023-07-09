import Post from './Post/Post';
import {createRef} from "react";

const MyPosts = ({posts, handleAddPost, onPostTextChange}) => {
    const postComponents = posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likesCount}/>);

    const messageBox = createRef();
    const addPost = () => {
        handleAddPost()
        onPostTextChange('')
    }

    const onPostTextChangeLocal = (sender) => {
        onPostTextChange(sender.target.value)
    }

    return (
        <div>
            My posts
            <div>
                <textarea onChange={onPostTextChangeLocal} ref={messageBox}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;