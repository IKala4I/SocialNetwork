import classes from "./MessageRows.module.css"
import MessageRow from "./MessageRow/MessageRow"
import {FC, ReactNode} from 'react'

type MessageRowsPropsType = {
    messages: ReactNode[],
    icons: ReactNode[]
}

const MessageRows: FC<MessageRowsPropsType> = ({messages, icons}) => {
    const messageRowComponents: ReactNode[] = []

    messages.forEach((messageComponent, index) => messageRowComponents.push(
            <MessageRow icon={icons[index]} message={messageComponent}/>
        )
    )
    return (
        <div className={classes.messageRows}>
            {messageRowComponents}
        </div>
    )
}

export default MessageRows