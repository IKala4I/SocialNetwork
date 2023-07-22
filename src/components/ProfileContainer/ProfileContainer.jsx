import {Component} from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {getUserProfile, setProfile, toggleIsProfileFetching} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withRouter from "../../withRouter";
import withAuthNavigate from "../../withAuthNavigate";
import {compose} from "redux";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.router.params.userID

        if (!userId)
            userId = 29623

        this.props.getUserProfile(userId)
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

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        setProfile,
        toggleIsProfileFetching,
        getUserProfile
    }),
    withRouter
)(ProfileContainer)