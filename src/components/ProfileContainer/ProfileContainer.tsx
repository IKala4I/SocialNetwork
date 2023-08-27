import {useEffect} from "react"
import Profile from "./Profile/Profile"
import {useDispatch, useSelector} from "react-redux"
import {getStatus, getUserProfile} from "../../redux/reducers/profile-reducer/profile-reducer"
import Preloader from "../common/Preloader/Preloader"
import withAuthNavigate from "../../hoc/withAuthNavigate"
import {Action} from "redux"
import {getIsProfileFetching} from "../../redux/selectors/profile-selectors"
import {getUserId} from "../../redux/selectors/auth-selectors"
import {AppStateType} from '../../redux/redux-store'
import {useParams} from 'react-router-dom'
import {ThunkDispatch} from 'redux-thunk'

const ProfileContainer = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const params = useParams()

    const authorizedUserId = useSelector(getUserId)
    const isProfileFetching = useSelector(getIsProfileFetching)

    const refreshProfile = () => {
        const stringUserId = params.userId
        let numberUserId = authorizedUserId

        if (stringUserId) {
            numberUserId = Number(stringUserId)
        }

        dispatch(getUserProfile(numberUserId as number))
        dispatch(getStatus(numberUserId as number))
    }

    useEffect(() => {
        refreshProfile()
    }, [params.userId])

    return (
        <>
            {isProfileFetching ? <Preloader/> : <Profile/>}
        </>
    )
}
export default withAuthNavigate(ProfileContainer)