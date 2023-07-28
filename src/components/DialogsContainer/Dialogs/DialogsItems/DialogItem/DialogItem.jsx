import classes from "./DialogItem.module.css"
import {NavLink} from "react-router-dom"

function DialogItem({title, id}) {
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