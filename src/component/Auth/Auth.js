import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateUsername, updateProfile, updateUserId, updateUser} from '../../ducks/reducer'

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
        let res = await axios.post('/api/auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        this.props.updateUser()
        this.props.updateUsername()
        this.props.updateProfile()
        this.props.updateUserId()
        console.log(this.props)
        console.log(this.props.username)
        this.props.history.push('/dashboard')
    }

    async register(){
        let res = await axios.post('/api/auth/register', {
            username: this.state.username,
            password: this.state.password
        })
        this.props.updateUser()
        this.props.updateUsername()
        this.props.updateProfile()
        this.props.updateUserId()
        console.log(this.props)
        console.log(this.props.username)
        //this.props.history.push('/dashboard')
    }
 

    render(){
        return (
            <div>
                Username:
                <input type='text' onChange={event => this.handleUsername(event.target.value)}/>
                
                Password:
                <input type='text' onChange={event => this.handlePassword(event.target.value)}/>

                <button onClick={() => {
                    this.login() 
                    this.props.updateUser()

                }
                    } type='button'>Login</button>
                <button onClick={() => this.register()} type='button'>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state
}

let mapDispatchToProps = {
    updateUsername,
    updateProfile,
    updateUserId,
    updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)