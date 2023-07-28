import {getIsAuth} from "../../redux/selectors/auth-selectors"
import {connect} from "react-redux"
import {logIn} from "../../redux/reducers/auth-reducer/auth-reducer"
import Login from "./Login/Login"

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {
    logIn,
})(Login)