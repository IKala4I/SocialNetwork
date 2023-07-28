import classes from "./MessageRows.module.css"
import MessageRow from "./MessageRow/MessageRow"

function MessageRows({messages, icons}) {
    const messageRowComponents = []
    messages.forEach((messageComponent, index) => messageRowComponents.push(
            <MessageRow icon={icons[index]} message={messageComponent}/>
        )
    )
    return (
        <div className={classes.messageRows}>
            {messageRowComponents}
        </div>
    )
}

export default MessageRows