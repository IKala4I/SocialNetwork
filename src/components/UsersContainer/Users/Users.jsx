import User from "./User/User";
import axios from "axios";
import {Component} from "react";

class Users extends Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response =>
                this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className='users'>
                {this.props.users.map(user => <User key={user.id} userInfo={user}
                                                    follow={this.props.follow}
                                                    unfollow={this.props.unfollow}/>)}
            </div>
        )
    }
}

export default Users