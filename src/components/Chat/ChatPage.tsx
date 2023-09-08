import {FC, memo, useEffect, useRef, useState} from 'react'
import defaultUserPhoto from '../../assets/images/user.png'
import {useDispatch, useSelector} from 'react-redux'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../redux/redux-store'
import {Action} from 'redux'
import {
    sendMessage,
    startMessagesListening,
    stopMessagesListening
} from '../../redux/reducers/chat-reducer/chat-reducer'
import {getChatMessages, getChatStatus} from '../../redux/selectors/chat-selectors'
import {ChatMessageAPIType} from '../../api/chatAPI'

const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const status = useSelector(getChatStatus)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <>
            {status === 'error' && <div>Some error occured. Please refresh the page</div>}
            <Messages/>
            <AddMessageForm/>
        </>)
}

const Messages: FC = () => {
    const messages = useSelector(getChatMessages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(true)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((m, index) => <Message key={m.id} message={m}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

type MessagePropsType = {
    message: ChatMessageAPIType
}

const Message: FC<MessagePropsType> = memo(({message}) => {
    return (
        <div>
            <img src={message.photo ? message.photo : defaultUserPhoto} style={{width: '40px'}} alt='photo'/>
            <div style={{display: 'block'}}>
                <strong>{message.userName}</strong>
            </div>
            {message.message}
        </div>
    )
})

const AddMessageForm: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const [message, setMessage] = useState('')

    const status = useSelector(getChatStatus)

    const sendMessageHandler = () => {
        if (!message)
            return
        dispatch(sendMessage(message))
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
            </div>
            <div>
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send
                </button>
            </div>
        </div>
    )
}

export default ChatPage