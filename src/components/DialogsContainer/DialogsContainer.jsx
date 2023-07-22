import Dialogs from "./Dialogs/Dialogs";
import {
    sendMessageActionCreator as sendMessage,
    updateNewMessageBodyActionCreator as updateNewMessageBody
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthNavigate from "../../withAuthNavigate";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}
export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        sendMessage,
        updateNewMessageBody
    })
)(Dialogs)