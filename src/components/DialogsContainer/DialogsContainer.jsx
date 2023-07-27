import Dialogs from "./Dialogs/Dialogs";
import {
    sendMessage
} from "../../redux/reducers/dialogs-reducer/dialogs-reducer";
import {connect} from "react-redux";
import withAuthNavigate from "../../hoc/withAuthNavigate";
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