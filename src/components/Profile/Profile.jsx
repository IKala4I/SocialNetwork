import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile({state, handleAddPost, onPostTextChange}) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.posts} handleAddPost={handleAddPost} onPostTextChange={onPostTextChange} />
        </div>
    );
}

export default Profile;