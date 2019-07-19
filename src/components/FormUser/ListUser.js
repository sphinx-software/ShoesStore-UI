import React, { Component } from 'react';
import axios                from 'axios';

export default class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = [];
    };


    componentWillMount() {
        axios.get('/users')
            .then(res => {
                this.setState({
                    users: res.data
                });
            })
            .catch(e => {
                console.log(e);
            })
        }


    render() {

        const { users } = this.state;

        return(
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
        );
    }
}
