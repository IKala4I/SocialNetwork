import Message from "./Message/Message";
import MessageRows from "./MessageRows/MessageRows";
import Icon from "./Icon/Icon";
import classes from "./Messages.module.css";
import {Field, reduxForm} from "redux-form";

function Messages({messages, sendMessage}) {

    const messageComponents = messages.map(message => <Message messageData={message}/>);
    const iconComponents = messages.map(message => <Icon name={message.sender}/>)
    const onSendMessage = (formData) => {
        sendMessage(formData.newMessageBody)
    }

    return (
        <div className={classes.messages}>
            <MessageRows messages={messageComponents} icons={iconComponents}/>
            <div>
                <NewMessageForm onSubmit={onSendMessage}/>
            </div>
        </div>
    );
}

let NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' component='textarea'/>
            <button type='submit'>Send message</button>
        </form>
    )
}

NewMessageForm = reduxForm({form: 'NewMessageForm'})(NewMessageForm)

export default Messages;