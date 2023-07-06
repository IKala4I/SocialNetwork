import Post from './Post/Post';

const postsData = [
    {
        id: 1,
        message: 'Hi, How r u?',
        likeCount: 5
    },
    {
        id: 2,
        message: 'It\'s my first post',
        likeCount: 1
    }
];

const postsArray = postsData.map(data => <Post id={data.id} message={data.message} likeCount={data.likeCount}/>);

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postsArray}
            </div>
        </div>
    );
}

export default MyPosts;