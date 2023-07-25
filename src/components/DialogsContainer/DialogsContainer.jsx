import Dialogs from "./Dialogs/Dialogs";
import {
    sendMessage
} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import withAuthNavigate from "../../withAuthNavigate";
import {compose} from "redux";
import {getDialogItems, getMessages} from "../../redux/selectors/dialogs-selectors";

const mapStateToProps = (state) => {
    return {
        dialogItems: getDialogItems(state),
        messages: getMessages(state)
    }
}
export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        sendMessage
    })
)(Dialogs)