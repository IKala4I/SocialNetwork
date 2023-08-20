import Dialogs from "./Dialogs/Dialogs"
import {connect, ConnectedProps} from "react-redux"
import withAuthNavigate from "../../hoc/withAuthNavigate"
import {compose} from "redux"
import {getDialogItems, getMessages} from "../../redux/selectors/dialogs-selectors"
import {AppStateType} from '../../redux/redux-store'
import {dialogsActions} from "../../redux/reducers/dialogs-reducer/dialogs-reducer";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogItems: getDialogItems(state),
        messages: getMessages(state)
    }
}

const connector = connect(mapStateToProps, {
    ...dialogsActions
})
export type DialogsPropsType = ConnectedProps<typeof connector>
export default compose(
    withAuthNavigate,
    connector
)(Dialogs)