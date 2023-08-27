import userDefaultPhoto from '../../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import {FC, useState} from "react"
import classes from './ProfileInfo.module.css'
import ProfileData from "./ProfileData/ProfileData"
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm"
import {
    ProfileType,
    savePhoto,
    saveProfile,
    updateStatus
} from "../../../../redux/reducers/profile-reducer/profile-reducer"
import {useDispatch, useSelector} from 'react-redux'
import {getProfile, getProfileStatus} from '../../../../redux/selectors/profile-selectors'
import {ThunkDispatch} from 'redux-thunk'
import {AppStateType} from '../../../../redux/redux-store'
import {Action} from 'redux'
import {useParams} from 'react-router-dom'

const ProfileInfo: FC = () => {
    const dispatch: ThunkDispatch<AppStateType, void, Action> = useDispatch()

    const profile = useSelector(getProfile)
    const status = useSelector(getProfileStatus)

    const params = useParams()
    let isOwner = false

    if (!params.userId)
        isOwner = true

    const [editMode, setEditMode] = useState(false)

    if (!profile)
        return <></>

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    const onSubmit = (formData: ProfileType) => {
        dispatch(saveProfile(formData)).then(
            () => {
                setEditMode(false)
            }
        )
    }

    const updateStatusHandler = (status: string) => {
        dispatch(updateStatus(status))
    }

    return (
        <>
            <div>
                <img
                    src='https://e1.pxfuel.com/desktop-wallpaper/197/736/desktop-wallpaper-hot-girls-ultra-wide-women.jpg'
                    alt='content img'/>
            </div>
            <div>
                <img src={profile.photos.large || userDefaultPhoto} className={classes.mainPhoto} alt='avatar'/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
                <ProfileStatus status={status} updateStatus={updateStatusHandler}/>
            </div>
        </>
    )
}

export default ProfileInfo