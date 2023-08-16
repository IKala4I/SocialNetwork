import Message from "./Message/Message"
import MessageRows from "./MessageRows/MessageRows"
import Icon from "./Icon/Icon"
import classes from "./Messages.module.css"
import {MessageType} from '../../../../redux/reducers/dialogs-reducer/dialogs-reducer'
import {FC} from 'react'
import NewMessageForm from './NewMessageForm/NewMessageForm'

type MessagesPropsType = {
    messages: Array<MessageType>,
    sendMessage: (messageBody: string) => void
}

export type NewMessageFormDataType = {
    newMessageBody: string
}

const Messages: FC<MessagesPropsType> = ({messages, sendMessage}) => {

    const messageComponents = messages.map(message => <Message messageData={message}/>)
    const iconComponents = messages.map(message => <Icon name={message.sender}/>)
    const onSendMessage = (formData: NewMessageFormDataType) => {
        sendMessage(formData.newMessageBody)
    }

    return (
        <div className={classes.messages}>
            <MessageRows messages={messageComponents} icons={iconComponents}/>
            <div>
                <NewMessageForm onSubmit={onSendMessage}/>
            </div>
        </div>
    )
}

export default Messages