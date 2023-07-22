import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import {Component} from "react";
import {getFriends, setFriends} from "../../../redux/sidebar-reducer";

class FriendsContainer extends Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        return (
            <Friends friends={this.props.friends}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }

}

export default connect(mapStateToProps, {setFriends, getFriends})(FriendsContainer)