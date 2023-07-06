import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems";
import Messages from "./Messages/Messages";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <DialogsItems/>
            <Messages/>
        </div>
    );
}

export default Dialogs;