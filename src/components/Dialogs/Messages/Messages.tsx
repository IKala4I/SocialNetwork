import Message from "./Message/Message"
import MessageRows from "./MessageRows/MessageRows"
import Icon from "./Icon/Icon"
import classes from "./Messages.module.css"
import {dialogsActions, DialogsActionsType} from '../../../redux/reducers/dialogs-reducer/dialogs-reducer'
import {FC} from 'react'
import NewMessageForm from './NewMessageForm/NewMessageForm'
import {Dispatch} from "redux";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../../redux/selectors/dialogs-selectors";

export type NewMessageFormDataType = {
    newMessageBody: string
}

const Messages: FC = () => {
    const dispatch: Dispatch<DialogsActionsType> = useDispatch()

    const messages = useSelector(getMessages)

    const sendMessage = (newMessageBody: string) => {
        dispatch(dialogsActions.sendMessage(newMessageBody))
    }

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