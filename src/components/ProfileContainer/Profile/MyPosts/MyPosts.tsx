import Post from './Post/Post'
import {profileActions, ProfileActionsType} from "../../../../redux/reducers/profile-reducer/profile-reducer"
import {FC} from "react";
import NewPostForm from "./NewPostForm/NewPostForm";
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../../../../redux/selectors/profile-selectors'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../../redux/redux-store'

export type AddPostFormDataType = {
    newPostText: string
}
const MyPosts: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, ProfileActionsType> = useDispatch()

    const posts = useSelector(getPosts)

    const postComponents = posts.map(post => <Post message={post.message}
                                                   likeCount={post.likesCount}/>)

    const onAddPost = (formData: AddPostFormDataType) => {
        dispatch(profileActions.addPost(formData.newPostText))
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