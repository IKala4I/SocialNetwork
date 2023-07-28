import classes from "./Message.module.css"

function Message({messageData}) {
    return (
        <div className={classes.message}>
            {messageData.message}
        </div>
    )
}

export default Message