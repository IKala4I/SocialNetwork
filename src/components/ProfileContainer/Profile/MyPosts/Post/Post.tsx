import classes from './Post.module.css'
import {FC} from "react";

type PostPropsType = {
    message: string,
    likeCount: number
}
const Post: FC<PostPropsType> = ({message, likeCount}) => {
    return (
        <div className={classes.item}>
            <img
                src='https://www.shutterstock.com/image-photo/young-beautiful-girl-driving-car-260nw-1154053897.jpg'
                alt='post img'
            />
            {message}
            <div>
                <span>Like {likeCount}</span>
            </div>
        </div>
    )
}

export default Post