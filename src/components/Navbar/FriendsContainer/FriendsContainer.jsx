import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import {Component} from "react";
import {requestFriends} from "../../../redux/sidebar-reducer";
import {getFriends} from "../../../redux/selectors/sidebar-selectors";

class FriendsContainer extends Component {
    componentDidMount() {
        this.props.requestFriends()
    }

    render() {
        return (
            <Friends friends={this.props.friends}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state)
    }

}

export default connect(mapStateToProps, {requestFriends})(FriendsContainer)