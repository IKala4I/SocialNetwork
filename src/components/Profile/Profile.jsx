import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({store}) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts store={store}/>
        </div>
    );
}

export default Profile;