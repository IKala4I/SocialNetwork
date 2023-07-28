import Post from './Post/Post'
import {Field, reduxForm} from "redux-form"
import {maxLength, required} from "../../../../../utils/validators"
import {Textarea} from "../../../../common/FormControls/FormControls"

const maxLength20 = maxLength(20)

const MyPosts = ({posts, addPost}) => {
    const postComponents = posts.map(post => <Post id={post.id} message={post.message}
                                                         likeCount={post.likesCount}/>)

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
    )
}

let NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' component={Textarea} validate={[required, maxLength20]}/>
            <button type='submit'>Add post</button>
        </form>
    )
}

NewPostForm = reduxForm({form: 'NewPostForm'})(NewPostForm)

export default MyPosts