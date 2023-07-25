import {Component} from "react";
import Profile from "./Profile/Profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUserProfile,
    updateStatus
} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import withRouter from "../../withRouter";
import withAuthNavigate from "../../withAuthNavigate";
import {compose} from "redux";
import {getIsProfileFetching, getProfile, getProfileStatus} from "../../redux/selectors/profile-selectors";
import {getUserId} from "../../redux/selectors/auth-selectors";

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.router.params.userID

        if (!userId) {
            userId = this.props.authorizedUserId
        }

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
        profile: getProfile(state),
        isProfileFetching: getIsProfileFetching(state),
        status: getProfileStatus(state),
        authorizedUserId: getUserId(state)
    }
}

export default compose(
    withAuthNavigate,
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter
)(ProfileContainer)