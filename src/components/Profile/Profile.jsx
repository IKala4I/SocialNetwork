import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div>
                <img
                    src='https://e1.pxfuel.com/desktop-wallpaper/197/736/desktop-wallpaper-hot-girls-ultra-wide-women.jpg'
                    alt='content img'/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;