import {Component} from "react";
import {connect} from "react-redux";
import Header from "./Header/Header";
import {setUserData} from "../../redux/auth-reducer";
import headerAPI from "../../api/headerAPI";

class HeaderContainer extends Component {
    componentDidMount() {
        headerAPI.getAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setUserData(id, email, login);
                }
            })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer)