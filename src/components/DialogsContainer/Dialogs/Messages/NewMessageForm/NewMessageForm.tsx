import {FC} from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeys, Textarea} from '../../../../common/FormControls/FormControls'
import {maxLength, required} from '../../../../../utils/validators'
import {NewMessageFormDataType} from '../Messages'

const maxLength50 = maxLength(30)

type NewMessageFormValuesKeysType = GetStringKeys<NewMessageFormDataType>
const NewMessageForm: FC<InjectedFormProps<NewMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<NewMessageFormValuesKeysType>("Enter your message", 'newMessageBody', [required, maxLength50], Textarea)}
            <button type='submit'>Send message</button>
        </form>
    )
}

export default reduxForm<NewMessageFormDataType>({form: 'NewMessageForm'})(NewMessageForm)