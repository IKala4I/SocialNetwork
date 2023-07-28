import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages"

function Dialogs({dialogItems,messages, sendMessage}) {
    return (
        <div className={classes.dialogs}>
            <DialogsItems dialogItems={dialogItems}/>
            <Messages messages={messages} sendMessage={sendMessage}/>
        </div>
    )
}

export default Dialogs