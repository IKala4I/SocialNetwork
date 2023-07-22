import Dialogs from "./Dialogs/Dialogs";
import {
    sendMessageActionCreator as sendMessage,
    updateNewMessageBodyActionCreator as updateNewMessageBody
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthNavigate from "../../withAuthNavigate";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

const DialogsContainer = withAuthNavigate(connect(mapStateToProps, {
    sendMessage,
    updateNewMessageBody
})(Dialogs))

export default DialogsContainer;