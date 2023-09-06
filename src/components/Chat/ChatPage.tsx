import {FC, useEffect, useState} from 'react'
import defaultUserPhoto from '../../assets/images/user.png'

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
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChannel, 6000)
        }

        const createChannel = () => {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <>
            <Messages wsChannel={wsChannel}/>
            <AddMessageForm wsChannel={wsChannel}/>
        </>)
}

type MessagesPropsType = {
    wsChannel: WebSocket | null
}

const Messages: FC<MessagesPropsType> = ({wsChannel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }

        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])
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

type AddMessageFormPropsType = {
    wsChannel: WebSocket | null
}
const AddMessageForm: FC<AddMessageFormPropsType> = ({wsChannel}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        const openHandler = () => {
            setReadyStatus('ready')
        }
        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])
    const sendMessage = () => {
        if (!message)
            return
        wsChannel?.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={wsChannel === null || readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage