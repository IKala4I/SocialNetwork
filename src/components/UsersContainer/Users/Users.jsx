import User from "./User/User";
import axios from "axios";

function Users({users, follow, unfollow, setUsers}) {
    if (users.length === 0)
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => setUsers(response.data.items))

    const userComponents = users.map(user => <User key={user.id} userInfo={user} follow={follow} unfollow={unfollow}/>)

    return (
        <div className='users'>
            {userComponents}
        </div>
    )
}

export default Users