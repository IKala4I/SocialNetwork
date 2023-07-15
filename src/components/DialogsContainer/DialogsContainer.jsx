import Dialogs from "./Dialogs/Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            const sendMessageAction = sendMessageActionCreator()
            dispatch(sendMessageAction)
        },
        updateSendMessageBody: (message) => {
            const updateSendMessageAction = updateNewMessageBodyActionCreator(message)
            dispatch(updateSendMessageAction)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;