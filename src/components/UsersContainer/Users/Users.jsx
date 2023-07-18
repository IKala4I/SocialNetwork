import User from "./User/User";
import axios from "axios";
import {Component} from "react";
import classes from './users.module.css'

class Users extends Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.updateCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []

        for (let i = 1; i <= pagesCount; i++)
            pages.push(i)

        return (
            <div className='users'>
                <div>
                    {pages.map(pageNumber =>
                        <span className={pageNumber === this.props.currentPage ? classes.selectedPage : classes.page}
                              onClick={
                                  (e) => this.onPageChanged(pageNumber)}>{pageNumber}</span>)}
                </div>
                {this.props.users.map(user => <User key={user.id} userInfo={user}
                                                    follow={this.props.follow}
                                                    unfollow={this.props.unfollow}/>)}
            </div>
        )
    }
}

export default Users