import Message from "./Message/Message";
import MessageRows from "./MessageRows/MessageRows";
import Icon from "./Icon/Icon";
import classes from "./Messages.module.css";

function Messages({messages}) {
    const messageComponents = messages.map(message => <Message messageData={message}/>);
    const iconComponents = messages.map(message => <Icon name={message.sender}/>)

    return (
        <div className={classes.messages}>
            <MessageRows messages={messageComponents} icons={iconComponents}/>
            <div>
                <textarea></textarea>
                <button>Send message</button>
            </div>
        </div>

    );
}

export default Messages;