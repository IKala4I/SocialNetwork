import classes from './DialogsItems.module.css'
import DialogItem from "./DialogItem/DialogItem";

function DialogsItems({dialogItems}) {
    const dialogItemComponents = dialogItems.map(dialog => <DialogItem title={dialog.title} id={dialog.id}/>);

    return (
        <div className={classes.dialogsItems}>
            {dialogItemComponents}
        </div>
    );
}

export default DialogsItems;