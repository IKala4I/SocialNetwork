import {Component} from "react"
import Profile, {MapDispatchProfileType, MapStateProfileType} from "./Profile/Profile"
import {connect} from "react-redux"
import {
    getStatus,
    getUserProfile, savePhoto, saveProfile,
    updateStatus
} from "../../redux/reducers/profile-reducer/profile-reducer"
import Preloader from "../common/Preloader/Preloader"
import withRouter from "../../withRouter"
import withAuthNavigate from "../../hoc/withAuthNavigate"
import {compose} from "redux"
import {getIsProfileFetching, getProfile, getProfileStatus} from "../../redux/selectors/profile-selectors"
import {getUserId} from "../../redux/selectors/auth-selectors"
import {AppStateType} from '../../redux/redux-store'

class ProfileContainer extends Component<MapStatePropsType & MapDispatchPropsType & any> {
    refreshProfile() {
        let userId = this.props.router.params.userId

        if (!userId) {
            userId = this.props.authorizedUserId
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: (MapStatePropsType & any), prevState: AppStateType) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <>
                {this.props.isProfileFetching
                    ?
                    <Preloader/>
                    :
                    <Profile
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        isOwner={!this.props.router.params.userId}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}/>}
            </>
        )
    }
}

type MapStateExtraPropsType = {
    isProfileFetching: boolean,
    authorizedUserId: number | null
}

type MapStatePropsType = MapStateExtraPropsType & MapStateProfileType

type MapDispatchExtraPropsType = {
    getStatus: (userId: number) => void,
    getUserProfile: (userId: number) => void
}

type MapDispatchPropsType = MapDispatchExtraPropsType & MapDispatchProfileType

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: getProfile(state),
        isProfileFetching: getIsProfileFetching(state),
        status: getProfileStatus(state),
        authorizedUserId: getUserId(state)
    }
}

export default compose(
    withAuthNavigate,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter
)(ProfileContainer)