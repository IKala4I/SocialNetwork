import Post from './Post/Post'
import {PostType} from "../../../../../redux/reducers/profile-reducer/profile-reducer"
import {FC} from "react";
import NewPostForm from "./NewPostForm/NewPostForm";

export type MapStateMyPostsType = {
    posts: Array<PostType>
}

export type MapDispatchMyPostsType = {
    addPost: (newPostText: string) => void
}

export type AddPostFormDataType = {
    newPostText: string
}
const MyPosts: FC<MapStateMyPostsType & MapDispatchMyPostsType> = ({posts, addPost}) => {
    const postComponents = posts.map(post => <Post message={post.message}
                                                   likeCount={post.likesCount}/>)

    const onAddPost = (formData: AddPostFormDataType) => {
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

export default MyPosts