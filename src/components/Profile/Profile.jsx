import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({state}) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts}/>
        </div>
    );
}

export default Profile;