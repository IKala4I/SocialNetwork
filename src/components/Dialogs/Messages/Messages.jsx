import Message from "./Message/Message";
import MessageRows from "./MessageRows/MessageRows";
import Icon from "./Icon/Icon";
import classes from "./Messages.module.css";
import {
    sendMessageActionCreator,
    updateSendMessageActionCreator
} from "../../../redux/store";
import {createRef} from "react";

function Messages({messages, dispatch}) {
    const messageComponents = messages.map(message => <Message messageData={message}/>);
    const iconComponents = messages.map(message => <Icon name={message.sender}/>)

    const messageBox = createRef()

    const sendMessage = () => {
        const sendMessageAction = sendMessageActionCreator()
        dispatch(sendMessageAction)
    }
    const onMessageUpdate = () => {
        const message = messageBox.current.value
        const updateSendMessageAction = updateSendMessageActionCreator(message)
        dispatch(updateSendMessageAction)
    }

    return (
        <div className={classes.messages}>
            <MessageRows messages={messageComponents} icons={iconComponents}/>
            <div>
                <textarea ref={messageBox} onChange={onMessageUpdate} value={messages.message}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>

    );
}

export default Messages;