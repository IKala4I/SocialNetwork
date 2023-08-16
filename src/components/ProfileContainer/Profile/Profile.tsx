import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer"
import {ProfileType} from '../../../redux/reducers/profile-reducer/profile-reducer'
import {FC} from 'react'

export type MapStateProfileType = {
    profile: ProfileType | null,
    status: string
}

export type MapDispatchProfileType = {
    updateStatus: (status: string) => void,
    savePhoto: (file: any) => void,
    saveProfile: (profile: ProfileType) => void
}

type ProfileExtraPropsType = {
    isOwner: boolean
}

type ProfilePropsType = MapStateProfileType & ProfileExtraPropsType

const Profile: FC<ProfilePropsType & MapDispatchProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile