import {getCaptchaURL, getIsAuth} from "../../redux/selectors/auth-selectors"
import {connect} from "react-redux"
import {logIn} from "../../redux/reducers/auth-reducer/auth-reducer"
import Login, {MapDispatchLoginPropsType, MapStateLoginPropsType} from "./Login/Login"
import {AppStateType} from '../../redux/redux-store'

const mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuth(state),
    captchaUrl: getCaptchaURL(state)
})
export default connect<MapStateLoginPropsType, MapDispatchLoginPropsType, {}, AppStateType>(mapStateToProps, {
    logIn,
})(Login)