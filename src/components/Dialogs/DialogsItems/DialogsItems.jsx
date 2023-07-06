import classes from './DialogsItems.module.css'
import DialogItem from "./DialogItem/DialogItem";

const dialogItemsData = [
    {
        id: 1,
        title: 'Vladyslav'
    },
    {
        id: 2,
        title: 'Sasha'
    },
    {
        id: 3,
        title: 'Kate'
    },
    {
        id: 4,
        title: 'John'
    }
];

const dialogsItemsArray = dialogItemsData.map(data => <DialogItem title={data.title} id={data.id}/>);

function DialogsItems() {
    return (
        <div className={classes.dialogsItems}>
            {dialogsItemsArray}
        </div>
    );
}

export default DialogsItems;