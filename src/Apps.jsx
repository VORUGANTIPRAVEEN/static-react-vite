import React, { Component } from 'react'
import './App.css'
export default class Apps extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            err: null,
            isLoading: false
        }
    };
    componentDidMount() {
        this.setState({ isLoading: true })
        let url = 'https://api.github.com/users';
        fetch(url)
            .then((response) => response.json())
            .then(res => {
                console.log("res",res);
                this.setState({
                    users: res,
                    isLoading: false
                })
            }).catch(e => {
                this.setState({
                    err: e,
                    isLoading: false
                })

            })
    }
    render() {
        let { users, err, isLoading } = this.state;
        if (err) {
            console.log("error", err);
            return <div>{err}</div>
        }
        if (isLoading) {
            console.log("user is",users);
            console.log("isLoading", isLoading);
            return (
                <div>{isLoading}</div>
            )
        }
        return (
            <div>
                {users.length > 0 ?
                    <div className='main'>
                        {users.map(user => (
                            <div key={user.id} className='group'>
                                <img alt='user image' src={user.avatar_url} width="120px" height="120px"/>
                                <div>name: {user.login}</div>
                                
                                
                            </div>
                            
                        ))}
                    </div>
                    : <div> No user found! </div>}
            </div>
        )

    }
}
