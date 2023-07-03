import classes from './Post.module.css'

function Post(props) {
    return (
        <div className={classes.item}>
            <img
                src='https://www.shutterstock.com/image-photo/young-beautiful-girl-driving-car-260nw-1154053897.jpg'
                alt='post img'
            />
            {props.message}
            <div>
                <span>Like {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;