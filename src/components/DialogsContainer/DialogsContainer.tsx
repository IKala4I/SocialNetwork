import Dialogs from "./Dialogs/Dialogs"
import {sendMessage} from "../../redux/reducers/dialogs-reducer/dialogs-reducer"
import {connect, ConnectedProps} from "react-redux"
import withAuthNavigate from "../../hoc/withAuthNavigate"
import {compose} from "redux"
import {getDialogItems, getMessages} from "../../redux/selectors/dialogs-selectors"
import {AppStateType} from '../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogItems: getDialogItems(state),
        messages: getMessages(state)
    }
}

const connector = connect(mapStateToProps, {
    sendMessage
})
export type DialogsPropsType = ConnectedProps<typeof connector>
export default compose(
    withAuthNavigate,
    connector
)(Dialogs)