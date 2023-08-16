import Friends, {MapStateFriendsType} from "./Friends/Friends"
import {connect} from "react-redux"
import {Component} from "react"
import {requestFriends} from "../../../redux/reducers/sidebar-reducer/sidebar-reducer"
import {getFriends} from "../../../redux/selectors/sidebar-selectors"
import {AppStateType} from '../../../redux/redux-store'

class FriendsContainer extends Component<MapStateFriendsType & MapDispatchPropsType> {
    componentDidMount() {
        this.props.requestFriends()
    }

    render() {
        return (
            <Friends friends={this.props.friends}/>
        )
    }
}

type MapDispatchPropsType = {
    requestFriends: () => void
}
const mapStateToProps = (state: AppStateType) => {
    return {
        friends: getFriends(state)
    }

}

export default connect<MapStateFriendsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {requestFriends})(FriendsContainer)