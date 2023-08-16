import {connect} from "react-redux"
import Header, {MapDispatchHeaderType, MapStateHeaderType} from "./Header/Header"
import {logOut} from "../../redux/reducers/auth-reducer/auth-reducer"
import {getIsAuth, getLogin} from "../../redux/selectors/auth-selectors"
import {AppStateType} from '../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default connect<MapStateHeaderType, MapDispatchHeaderType, {}, AppStateType>(mapStateToProps, {logOut})(Header)