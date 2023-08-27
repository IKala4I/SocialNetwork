import classes from "./MessageRow.module.css"
import {FC, ReactNode} from 'react'

type MessageRowPropsType = {
    icon: ReactNode,
    message: ReactNode
}
const MessageRow: FC<MessageRowPropsType> = ({icon, message}) => {
    return (
        <div className={classes.messageRow}>
            {icon}
            {message}
        </div>
    )
}

export default MessageRow