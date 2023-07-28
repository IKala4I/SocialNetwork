import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer"
function Profile({profile, status, updateStatus, savePhoto, isOwner, saveProfile}) {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
                isOwner={isOwner}
                saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile