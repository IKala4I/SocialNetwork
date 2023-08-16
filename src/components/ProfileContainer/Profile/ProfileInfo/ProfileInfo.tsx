import userDefaultPhoto from '../../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import {FC, useState} from "react"
import classes from './ProfileInfo.module.css'
import {MapDispatchProfileType, ProfilePropsType} from "../Profile";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {ProfileType} from "../../../../redux/reducers/profile-reducer/profile-reducer";

const ProfileInfo: FC<ProfilePropsType & MapDispatchProfileType> = ({
                                                                        profile,
                                                                        savePhoto,
                                                                        saveProfile,
                                                                        ...restProps
                                                                    }) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile)
        return <></>

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
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
                {restProps.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={restProps.isOwner}/>}
                <ProfileStatus status={restProps.status} updateStatus={restProps.updateStatus}/>
            </div>
        </>
    )
}

export default ProfileInfo