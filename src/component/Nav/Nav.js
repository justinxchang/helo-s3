
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUsername, updateProfile} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'

function Nav (){
    return (
        <div>
            <Link to='/dashboard'><button>Home</button></Link>
            <Link to='/post/:postid'><button>New Post</button></Link>
            <Link to='/'><button>Logout</button></Link>
            <br />
            User: 
            {props.username}
            {props.profile}
            {props.user}
        </div>
    )
}

function mapStateToProps(state){
    return {
        username: state.username,
        profile: state.profile
    }
}

let mapDispatchToProps = {
    updateUsername,
    updateProfile
  }

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
// this.params.match? export default withRouter(Nav)

















// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {updateUsername, updateProfile} from '../../ducks/reducer'
// import {withRouter} from 'react-router-dom'

// class Nav extends Component {
//     render(){
//         console.log(this.props)
//         console.log(this.props.username)
//         return (
//             <div>
//                 <Link to='/dashboard'><button>Home</button></Link>
//                 <Link to='/post/:postid'><button>New Post</button></Link>
//                 <Link to='/'><button>Logout</button></Link>
//                 <br />
//                 User: 
//                 {this.props.username}
//                 {this.props.profile}
//                 {this.props.user}
//             </div>
//         )
//     }
// }

// function mapStateToProps(state){
//     return {
//         username: state.username,
//         profile: state.profile
//     }
// }

// let mapDispatchToProps = {
//     updateUsername,
//     updateProfile
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Nav)
// // this.params.match? export default withRouter(Nav)