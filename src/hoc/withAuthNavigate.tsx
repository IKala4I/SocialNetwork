import {Component, ComponentType} from "react"
import {Navigate} from "react-router-dom"
import {connect} from "react-redux"
import {AppStateType} from "../redux/redux-store";
import {getIsAuth} from "../redux/selectors/auth-selectors";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: getIsAuth(state)
} as MapPropsType)

type MapPropsType = {
    isAuth: boolean
}

export function withAuthNavigate(MyComponent: ComponentType<MapPropsType>) {
    class AuthenticatedComponent extends Component<MapPropsType> {
        render() {
            if (!this.props.isAuth)
                return <Navigate to="/login"/>

            return (
                <MyComponent {...this.props} />
            )
        }
    }

    return connect<MapPropsType, {}, MapPropsType, AppStateType>(mapStateToProps)(AuthenticatedComponent)
}

export default withAuthNavigate
