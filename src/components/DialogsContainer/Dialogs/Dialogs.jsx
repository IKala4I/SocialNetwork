import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

function Dialogs({state, sendMessage, updateNewMessageBody}) {
    return (
        <div className={classes.dialogs}>
            <DialogsItems dialogItems={state.dialogItems}/>
            <Messages messages={state.messages} sendMessage={sendMessage}
                      updateNewMessageBody={updateNewMessageBody} messageBody={state.newMessageBody}/>
        </div>
    );
}

export default Dialogs;