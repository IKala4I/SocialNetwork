import {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header/Header";
import {logOut} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {logOut})(HeaderContainer)