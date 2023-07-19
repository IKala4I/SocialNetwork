import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import {Component} from "react";
import {setFriends} from "../../../redux/sidebar-reducer";
import friendsAPI from "../../../api/friendsAPI";

class FriendsContainer extends Component {
    componentDidMount() {
        friendsAPI.getFriends()
            .then(data => {
                    this.props.setFriends(data.items)
                }
            )
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

export default connect(mapStateToProps, {setFriends})(FriendsContainer)