import {FC, useEffect, useState} from 'react'
import defaultUserPhoto from '../../assets/images/user.png'

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')


export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const ChatPage: FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: FC = () => {
    useEffect(() => {
    }, [])

    return (
        <>
            <Messages/>
            <AddMessageForm/>
        </>)
}

const Messages: FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])
    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map(message => <Message message={message}/>)}
        </div>
    )
}

type MessagePropsType = {
    message: ChatMessageType
}

const Message: FC<MessagePropsType> = ({message}) => {
    return (
        <div>
            <img src={message.photo ? message.photo : defaultUserPhoto} style={{width: '40px'}} alt='photo'/>
            <div style={{display: 'block'}}>
                <strong>{message.userName}</strong>
            </div>
            {message.message}
        </div>
    )
}

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (!message)
            return
        wsChannel.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage