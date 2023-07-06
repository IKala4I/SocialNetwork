import classes from "./Messages.module.css";
import Message from "./Message/Message";

const messagesData = [
    {
        id:1,
        message:'Hi, hru?'
    },
    {
        id:2,
        message:'Im glad to see you.'
    },
    {
        id:3,
        message:'Me too <3'
    },
];

const messagesArray = messagesData.map(data => <Message message={data.message} id={data.id}/> );
function Messages() {
    return (
        <div className={classes.messages}>
            {messagesArray}
        </div>
    );
}

export default Messages;