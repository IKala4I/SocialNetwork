import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {Textarea} from "../../../../../common/FormControls/FormControls"
import {maxLength, required} from "../../../../../../utils/validators"
import {FC} from "react";
import {AddPostFormDataType} from "../MyPosts";

const maxLength20 = maxLength(20)
const NewPostForm: FC<InjectedFormProps<AddPostFormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name='newPostText' component={Textarea} validate={[required, maxLength20]}/>
            <button type='submit'>Add post</button>
        </form>
    )
}

export default reduxForm<AddPostFormDataType>({form: 'NewPostForm'})(NewPostForm)