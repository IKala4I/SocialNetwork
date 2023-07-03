import Post from "./Post";
import classes from '../styles/Profile.module.css';

function Profile(){
    return (
        <div className={classes.profile}>
            <div>
                <img
                    src='https://e1.pxfuel.com/desktop-wallpaper/197/736/desktop-wallpaper-hot-girls-ultra-wide-women.jpg'
                    alt='content img'/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
}

export default Profile;