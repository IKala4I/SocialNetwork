import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const MyPosts = ({state, addPost}) => {
    const postComponents = state.posts.map(post => <Post id={post.id} message={post.message}
                                                         likeCount={post.likesCount}/>);

    const onAddPost = (formData) => {
        addPost(formData.newPostText)
    }

    return (
        <div>
            My posts
            <NewPostForm onSubmit={onAddPost}/>
            <div>
                {postComponents}
            </div>
        </div>
    );
}

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component='textarea'/>
            <button type='submit'>Add post</button>
        </form>
    )
}

NewPostForm = reduxForm({form: 'NewPostForm'})(NewPostForm)

export default MyPosts;