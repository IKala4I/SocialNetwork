import userDefaultPhoto from '../../../../assets/images/user.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function ProfileInfo({profile, status, updateStatus}) {
    if (!profile)
        return <></>

    return (
        <>
            <div>
                <img
                    src='https://e1.pxfuel.com/desktop-wallpaper/197/736/desktop-wallpaper-hot-girls-ultra-wide-women.jpg'
                    alt='content img'/>
            </div>
            <div>
                <div>
                    <img src={profile.photos.large ? profile.photos.large : userDefaultPhoto} alt='ava'/>
                </div>
                <ProfileStatus status={status} updateStatus={updateStatus}/>
            </div>
        </>
    );
}

export default ProfileInfo;