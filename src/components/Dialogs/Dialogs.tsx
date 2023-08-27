import classes from "./Dialogs.module.css"
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages"
import withAuthNavigate from "../../hoc/withAuthNavigate";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <DialogsItems/>
            <Messages/>
        </div>
    )
}

export default withAuthNavigate(Dialogs)