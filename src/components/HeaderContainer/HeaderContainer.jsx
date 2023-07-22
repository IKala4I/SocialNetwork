import {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header/Header";
import {getAuthMe} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getAuthMe()
    }

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

export default connect(mapStateToProps, {getAuthMe})(HeaderContainer)