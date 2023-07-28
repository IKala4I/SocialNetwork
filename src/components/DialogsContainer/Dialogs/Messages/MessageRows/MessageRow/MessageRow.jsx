import classes from "./MessageRow.module.css"

function MessageRow({icon, message}) {
    return (
        <div className={classes.messageRow}>
            {icon}
            {message}
        </div>
    )
}

export default MessageRow