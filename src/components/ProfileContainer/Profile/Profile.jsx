import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";

function Profile({profile}) {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;