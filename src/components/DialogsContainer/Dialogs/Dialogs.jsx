import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

function Dialogs({state, sendMessage}) {
    return (
        <div className={classes.dialogs}>
            <DialogsItems dialogItems={state.dialogItems}/>
            <Messages messages={state.messages} sendMessage={sendMessage}/>
        </div>
    );
}

export default Dialogs;