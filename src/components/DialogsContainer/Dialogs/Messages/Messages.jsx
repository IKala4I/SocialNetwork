import Message from "./Message/Message";
import MessageRows from "./MessageRows/MessageRows";
import Icon from "./Icon/Icon";
import classes from "./Messages.module.css";
import {createRef} from "react";

function Messages({messages, sendMessage, updateSendMessageBody, messageBody}) {

    const messageComponents = messages.map(message => <Message messageData={message}/>);
    const iconComponents = messages.map(message => <Icon name={message.sender}/>)

    const messageBox = createRef()
    const onSendMessage = () => {
        sendMessage()
    }
    const onMessageUpdate = () => {
        const message = messageBox.current.value
        updateSendMessageBody(message)
    }

    return (
        <div className={classes.messages}>
            <MessageRows messages={messageComponents} icons={iconComponents}/>
            <div>
                <textarea ref={messageBox} onChange={onMessageUpdate} value={messageBody}></textarea>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Messages;