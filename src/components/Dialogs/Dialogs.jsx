import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";
import {createRef} from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

function Dialogs({state, dispatch}) {

    const messageBox = createRef()
    const sendMessage = () => {
        const sendMessageAction = sendMessageActionCreator()
        dispatch(sendMessageAction)
    }
    const onMessageUpdate = () => {
        const message = messageBox.current.value
        const updateSendMessageAction = updateNewMessageBodyActionCreator(message)
        dispatch(updateSendMessageAction)
    }
    return (
        <div className={classes.dialogs}>
            <DialogsItems dialogItems={state.dialogItems}/>
            <Messages messages={state.messages} dispatch={dispatch}/>
            <div>
                <textarea ref={messageBox} onChange={onMessageUpdate} value={state.newMessageBody}></textarea>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;