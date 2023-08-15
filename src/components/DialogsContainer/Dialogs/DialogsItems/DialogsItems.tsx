import classes from './DialogsItems.module.css'
import DialogItem from "./DialogItem/DialogItem"
import {FC} from 'react'
import {DialogType} from '../../../../redux/reducers/dialogs-reducer/dialogs-reducer'

type DialogsItemsPropsType = {
    dialogItems: Array<DialogType>
}

const DialogsItems: FC<DialogsItemsPropsType> = ({dialogItems}) => {
    const dialogItemComponents = dialogItems.map(dialog => <DialogItem title={dialog.title} id={dialog.id}/>)

    return (
        <div className={classes.dialogsItems}>
            {dialogItemComponents}
        </div>
    )
}

export default DialogsItems