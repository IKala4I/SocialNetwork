import {Component} from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setProfile, toggleIsProfileFetching} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.toggleIsProfileFetching(true)
        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/29610')
            .then(response => {
                this.props.toggleIsProfileFetching(false)
                this.props.setProfile(response.data)
            })
    }

    render() {
        return (
            <>
                {this.props.isProfileFetching ? <Preloader/> : <Profile profile={this.props.profile}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isProfileFetching: state.profilePage.isProfileFetching
    }
}

export default connect(mapStateToProps, {setProfile, toggleIsProfileFetching})(ProfileContainer)