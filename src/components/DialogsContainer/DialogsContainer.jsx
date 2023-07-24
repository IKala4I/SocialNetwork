import Dialogs from "./Dialogs/Dialogs";
import {
    sendMessage
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
        sendMessage
    })
)(Dialogs)