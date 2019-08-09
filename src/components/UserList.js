import React, { Component } from 'react';
import axios                from 'axios';


class UserList extends Component {

    state = {
        users: []
    };

    componentWillMount() {
        axios.get('users').then(res => {
            this.setState({
                users: res.data
            });
        }).catch(err => console.log(err))
    }

    render() {

        const { users } = this.state;

        return (
            <div>
                {
                    users.map(user => {
                        return (
                            <div>
                                <div>{user.userName}</div>
                                <div>{user.password}</div>
                                <div>{user.diaChi}</div>
                                <div>{user.soNha}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList;