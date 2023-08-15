import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom"
import {FC} from 'react'

type DialogItemPropsType = {
    title: string,
    id: number
}
const DialogItem: FC<DialogItemPropsType> = ({title, id}) => {
    return (
        <div className={classes.dialog}>
            <NavLink
                to={`/dialogs/${id}`}
                className={({isActive}) =>
                    isActive ? `${classes.active}` : ""
                }
            >
                {title}
            </NavLink>
        </div>
    )
}

export default DialogItem