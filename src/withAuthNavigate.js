import {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export function withAuthNavigate(MyComponent) {
     class AuthenticatedComponent extends Component {
        render() {
            if (!this.props.isAuth)
                return <Navigate to="/login"/>

            return (
                <MyComponent {...this.props} />
            );
        }
    }

    return connect(mapStateToProps)(AuthenticatedComponent)
}

export default withAuthNavigate;
