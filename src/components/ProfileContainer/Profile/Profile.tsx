import ProfileInfo from "./ProfileInfo/ProfileInfo"
import {FC} from 'react'
import MyPosts from './MyPosts/MyPosts'

const Profile: FC = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile