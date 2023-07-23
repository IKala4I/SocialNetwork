import {Component} from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    toggleIsProfileFetching,
    updateStatus
} from "../../redux/profile-reducer";
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
        this.props.getStatus(userId)
    }

    render() {
        return (
            <>
                {this.props.isProfileFetching
                    ?
                    <Preloader/>
                    :
                    <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isProfileFetching: state.profilePage.isProfileFetching,
        status: state.profilePage.status
    }
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        toggleIsProfileFetching,
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter
)(ProfileContainer)