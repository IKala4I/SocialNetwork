import Dialogs from "./Dialogs/Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

function DialogsContainer({store}) {
    const sendMessage = () => {
        const sendMessageAction = sendMessageActionCreator()
        store.dispatch(sendMessageAction)
    }
    const updateSendMessageBody = (message) => {
        const updateSendMessageAction = updateNewMessageBodyActionCreator(message)
        store.dispatch(updateSendMessageAction)
    }
    return (
        <Dialogs state={store.getState().dialogsPage} sendMessage={sendMessage} updateSendMessageBody={updateSendMessageBody}/>
    );
}

export default DialogsContainer;