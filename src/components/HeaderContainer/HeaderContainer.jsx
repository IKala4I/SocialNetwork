import {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import Header from "./Header/Header";
import {setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
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