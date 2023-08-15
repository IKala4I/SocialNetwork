import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages"
import {DialogsPropsType} from '../DialogsContainer'

function Dialogs(props:DialogsPropsType) {
    return (
        <div className={classes.dialogs}>
            <DialogsItems dialogItems={props.dialogItems}/>
            <Messages messages={props.messages} sendMessage={props.sendMessage}/>
        </div>
    )
}

export default Dialogs