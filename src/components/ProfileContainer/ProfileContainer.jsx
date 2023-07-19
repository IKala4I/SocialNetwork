import {Component} from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {setProfile, toggleIsProfileFetching} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withRouter from "../../withRouter";
import profileAPI from "../../api/profileAPI";

class ProfileContainer extends Component {
    componentDidMount() {
        this.props.toggleIsProfileFetching(true)
        let userID = this.props.router.params.userID

        if (!userID)
            userID = 29623

        profileAPI.getUserProfile(userID)
            .then(data => {
                this.props.toggleIsProfileFetching(false)
                this.props.setProfile(data)
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

export default connect(mapStateToProps, {setProfile, toggleIsProfileFetching})(withRouter(ProfileContainer))