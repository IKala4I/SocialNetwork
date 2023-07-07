import Post from './Post/Post';

const MyPosts = ({posts}) => {
    const postComponents = posts.map(post => <Post id={post.id} message={post.message} likeCount={post.likeCount}/>);

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postComponents}
            </div>
        </div>
    );
}

export default MyPosts;