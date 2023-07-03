import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message={'Hi, How are u?'} likeCount={Math.floor(Math.random()*10)}/>
                <Post message={'It\'s my first post'} likeCount={Math.floor(Math.random()*10)}/>
            </div>
        </div>
    )
}

export default MyPosts;