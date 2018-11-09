import React, {Component} from 'react'
import axios from 'axios'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

    handleUsername (value) {
        this.setState({
            username: value
        })
    }

    handlePassword (value){
        this.setState({
            password: value
        }) 
    }

    async login(){
        let res = await axios.post('/api/auth/register', {
            username: this.state.username,
            password: this.state.password
        })
        this.props.history.push('/dashboard')
    }

    async register(){
        let res = await axios.post('/api/auth/register', {
            username: this.state.username,
            password: this.state.password
        })
        this.props.history.push('/dashboard')
    }
 

    render(){
        return (
            <div>
                Username:
                <input type='text' onChange={event => this.handleUsername(event.target.value)}/>
                
                Password:
                <input type='text' onChange={event => this.handlePassword(event.target.value)}/>

                <button onClick={() => this.login()} type='button'>Login</button>
                <button onClick={() => this.register()} type='button'>Register</button>
            </div>
        )
    }
}

export default Auth