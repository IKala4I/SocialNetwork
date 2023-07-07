import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

function Dialogs({state}) {
    return (
        <div className={classes.dialogs}>
            <DialogsItems dialogItems={state.dialogItems}/>
            <Messages messages={state.messages}/>
        </div>
    );
}

export default Dialogs;