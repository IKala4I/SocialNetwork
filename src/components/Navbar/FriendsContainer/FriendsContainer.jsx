import Friends from "./Friends/Friends";
import {connect} from "react-redux";
import {Component} from "react";
import axios from "axios";
import {setFriends} from "../../../redux/sidebar-reducer";

class FriendsContainer extends Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users?count=100', {withCredentials: true})
            .then(
                response => {
                    debugger
                    const friends = response.data.items.filter(user => user.followed)
                    this.props.setFriends(friends)
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