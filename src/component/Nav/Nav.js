import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'

function Nav (){
        return (
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/post/:postid'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
}

function mapStateToProps(state){
    console.log(state)
    return {
        username: state.username,
        profile: state.profile
        // can i just return state?
    }
}

// console.log(state.username)
console.log(props)
// let mapDispatchesToProps = {
//     username,
//     profile
//   }

export default connect(mapStateToProps, {updateUser})(Nav)
// this.params.match? export default withRouter(Nav)