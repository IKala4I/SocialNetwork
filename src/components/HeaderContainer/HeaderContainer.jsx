import {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header/Header";
import {logOut} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/selectors/auth-selectors";

class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default connect(mapStateToProps, {logOut})(HeaderContainer)