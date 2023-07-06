import classes from "./Message.module.css";

function Message({message, id}) {
    return (
        <div className={classes.message}>
            {message}
        </div>
    );
}

export default Message;