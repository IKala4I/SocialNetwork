import {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Textarea} from '../../../../common/FormControls/FormControls'
import {maxLength, required} from '../../../../../utils/validators'
import {NewMessageFormDataType} from '../Messages'

const maxLength30 = maxLength(30)
const NewMessageForm: FC<InjectedFormProps<NewMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' component={Textarea} validate={[required, maxLength30]}/>
            <button type='submit'>Send message</button>
        </form>
    )
}

export default reduxForm<NewMessageFormDataType>({form: 'NewMessageForm'})(NewMessageForm)