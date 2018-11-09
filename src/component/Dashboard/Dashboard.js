import React, {Component} from 'react'
import axios from 'axios';

// state {
//     posts: [],
//     search: '',
//     userposts: true
// }

// methods
// get all posts from database
// reset search


class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts: [],
            search: '',
            userposts: true
        }
    }

    updateSearch(value){
        this.setState({
            search: value
        })
    }

    resetSearch(){
        this.setState({
            search: ''
        })
    }

    componentDidMount(){
        axios.get('/api/posts/:userid')
        .then(res => {
            this.setState({
                posts: res.data,
                userposts: true
            })
        })
    }

    render(){
        return (
            <div>
                Dashboard
                <br />
                Search
                <input type='text' onChange={(event) => this.updateSearch(event.target.value)} />
                <button value={this.state.search} onClick={() => this.reset()}>Reset</button>
            </div>
        )
    }
}

export default Dashboard