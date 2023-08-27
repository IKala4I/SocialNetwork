import classes from "./Message.module.css"
import {MessageType} from '../../../../redux/reducers/dialogs-reducer/dialogs-reducer'
import {FC} from 'react'

type MessagePropsType = {
    messageData: MessageType
}

const Message: FC<MessagePropsType> = ({messageData}) => {
    return (
        <div className={classes.message}>
            {messageData.message}
        </div>
    )
}

export default Message