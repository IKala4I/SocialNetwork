import classes from './DialogsItems.module.css'
import DialogItem from "./DialogItem/DialogItem"
import {FC} from 'react'
import {useSelector} from "react-redux";
import {getDialogItems} from "../../../redux/selectors/dialogs-selectors";

const DialogsItems: FC = () => {
    const dialogItems = useSelector(getDialogItems)

    const dialogItemComponents = dialogItems.map(dialog => <DialogItem title={dialog.title} id={dialog.id}/>)

    return (
        <div className={classes.dialogsItems}>
            {dialogItemComponents}
        </div>
    )
}

export default DialogsItems